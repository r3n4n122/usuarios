FROM ruby:3.3.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /backend
COPY . .
COPY Gemfile /backend/Gemfile
COPY Gemfile.lock /backend/Gemfile.lock
RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000
