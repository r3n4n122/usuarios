Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # Ou adicione 'http://localhost:4000' caso o frontend esteja em outra porta
    resource '*', 
      headers: :any,
      methods: [:get, :post, :put, :delete, :options, :head]
  end
end
