# -*- encoding: utf-8 -*-
# stub: babel-transpiler 0.7.0 ruby lib

Gem::Specification.new do |s|
  s.name = "babel-transpiler".freeze
  s.version = "0.7.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Joshua Peek".freeze]
  s.date = "2015-04-03"
  s.description = "    Ruby Babel is a bridge to the JS Babel transpiler.\n".freeze
  s.email = "josh@joshpeek.com".freeze
  s.homepage = "https://github.com/babel/ruby-babel-transpiler".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.4.5".freeze
  s.summary = "Ruby Babel JS Compiler".freeze

  s.installed_by_version = "3.5.16".freeze if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<babel-source>.freeze, [">= 4.0".freeze, "< 6".freeze])
  s.add_runtime_dependency(%q<execjs>.freeze, ["~> 2.0".freeze])
  s.add_development_dependency(%q<minitest>.freeze, ["~> 5.5".freeze])
end
