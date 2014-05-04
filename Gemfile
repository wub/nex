source 'https://rubygems.org'

ruby '2.1.1'

# Rails
gem 'rails', '~> 4.1.0'
gem 'rack-timeout'
gem 'fast_blank'
gem 'lograge'
gem 'puma'

# TEMP
gem 'pg'

# Pages
gem 'high_voltage'
gem 'simple_form'
gem 'flutie'
gem 'title'

# Mail
gem 'recipient_interceptor'
gem 'email_validator'

# Users
gem 'devise'
gem 'pundit'

# Jobs, caching
gem 'hiredis' # C connection lib for redis
gem 'redis', require: ['redis', 'redis/connection/hiredis'] # task db, cache
gem 'redis-store'
gem 'sidekiq' # background task worker

# Media libs
gem 'image_optim' # github.com/toy/image_optim
gem 'image_sorcery' # requires imagemagick
gem 'streamio-ffmpeg' # requires ffmpeg

# Style
group :assets do
  gem 'neat' # semantic grids
  gem 'bourbon' # mixins
  gem 'bitters' # style defaults
  gem 'uglifier' # smoosh js
  gem 'sprockets-rails'
end

group :development do
  gem 'foreman' # runs junk in Procfile
  gem 'sinatra', require: false # for sidekiq admin
  gem 'better_errors' # what do you think m8
  gem 'binding_of_caller'
  # gem 'rack-mini-profiler' # nifty performance box top left
end

group :development, :test do
  gem 'pry-rails'
  gem 'dotenv-rails'
  gem 'awesome_print'
  gem 'factory_girl_rails'
  gem 'rspec-rails', '>= 2.14'
end

group :test do
  gem 'launchy'
  gem 'timecop'
  gem 'webmock'
  gem 'database_cleaner'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
end
