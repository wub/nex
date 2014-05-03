class FileWorker
	include Sidekiq::Worker

	def perform(file)
		# determine filetype

		# offload to specialised worker

		return true
	end
end
