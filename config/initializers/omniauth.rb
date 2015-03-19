OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
	provider :google_oauth2, '1026740880183-j4468ljkpljopr561fdq1fsc7pgsd27i.apps.googleusercontent.com', 'dM3NnQcFmUgEDIehoZwtWV8I', {client_options: {ssl: {ca_file: Rails.root.join("cacert.perm").to_s}}}
end
