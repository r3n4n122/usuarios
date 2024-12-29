Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      resources :users
      namespace :addresses do 
        get 'states', action: :states 
        get 'cities', action: :cities
      end
    end
  end
end
