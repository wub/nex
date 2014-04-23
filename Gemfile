source 'https://rubygems.org'

ruby '2.1.1'

gem 'rails'
gem 'airbrake'

# Assets
gem 'bourbon'
gem 'coffee-rails'
gem 'jquery-rails'
gem 'sprockets', '2.11.0'
gem 'sass-rails'
gem 'simple_form'
gem 'title'
gem 'uglifier'

gem 'delayed_job_active_record'
gem 'email_validator'
gem 'flutie'
gem 'high_voltage'
gem 'neat'
gem 'pg'
gem 'rack-timeout'
gem 'recipient_interceptor'

# Server
gem 'unicorn'

# Auth
gem 'devise'

group :development do
  gem 'foreman'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'awesome_print'
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'pry-rails'
  gem 'rspec-rails'
end

group :test do
  gem 'capybara-webkit', '>= 1.0.0'
  gem 'database_cleaner'
  gem 'launchy'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
  gem 'timecop'
  gem 'webmock'
end

group :staging, :production do
  gem 'newrelic_rpm', '>= 3.7.3'
end
