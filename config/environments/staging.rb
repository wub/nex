require_relative 'production'

Mail.register_interceptor RecipientInterceptor.new(ENV['EMAIL_RECIPIENTS'])

Rails.application.configure do
  # ...

  config.action_mailer.default_url_options = { host: 'staging.nex.com' }
end
