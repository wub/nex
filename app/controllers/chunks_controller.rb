#
# Chunk Controller
#
# This lets us upload files in an intelligent chunked format. If a file
# upload fails due to client disconnect; internet hiccup; server death;
# or anything else, it can be resumed from where it left off. Files are
# passed from here to the filetype handler for optimisation and moving.
#

class ChunksController < ApplicationController
  before_filter :set_working_directory

  # A temporary folder for the upload.
  # { Does this reset on every show etc? If so, DOOM }
  def set_working_directory
    @unique_id = SecureRandom.hex(10)
    dir = "tmp/uploads/#{@unique_id}"
  end

  # GET /chunk
  def show
    chunk = "#{@dir}/#{params[:resumableFilename]}.part#{params[:resumableChunkNumber]}"

    if File.exists?(chunk)
      render status: 200, nothing: true
    else
      # Chunk doesn't exist and needs to be uploaded
      render status: 404, nothing: true
    end
  end

  # POST /chunk
  def create
    chunk = "#{@dir}/#{params[:resumableFilename]}.part#{params[:resumableChunkNumber]}"

    FileUtils.mkdir(@dir, mode: 0700) unless File.directory?(@dir)
    FileUtils.mv params[:file].tempfile, chunk

    # Concatenate all the partial files into the original file
    currentSize = params[:resumableChunkNumber].to_i * params[:resumableChunkSize].to_i
    filesize = params[:resumableTotalSize].to_i

    # All chunks are uploaded
    if (currentSize + params[:resumableCurrentChunkSize].to_i) >= filesize

      # Create a target file
      File.open("#{@dir}/#{params[:resumableFilename]}", 'a') do |target|
        for i in 1..params[:resumableChunkNumber].to_i
          chunk = File.open("#{@dir}/#{params[:resumableFilename]}.part#{i}", 'r').read

          chunk.each_line do |line|
            target << line
          end

          FileUtils.rm "#{@dir}/#{params[:resumableFilename]}.part#{i}", force: true
        end

        logger.info "Queue ADD #{@dir}/#{params[:resumableFilename]}"
        FileWorker.perform_async("#{@dir}/#{params[:resumableFilename]}")
      end
    end

    render status: 200, nothing: true
  end
end
