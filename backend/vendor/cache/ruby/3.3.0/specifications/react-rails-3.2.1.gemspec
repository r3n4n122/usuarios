# -*- encoding: utf-8 -*-
# stub: react-rails 3.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "react-rails".freeze
  s.version = "3.2.1".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Paul O\u2019Shannessy".freeze, "Robert Mosolgo".freeze, "Gregory Myers".freeze, "Tsukuru Tanimichi".freeze]
  s.date = "2024-05-17"
  s.description = "Render components in views or controller actions. Server-side rendering powered by ExecJS. Transform JSX in the asset pipeline or use Shakapacker.".freeze
  s.email = ["paul@oshannessy.com".freeze, "rmosolgo@gmail.com".freeze, "neonmd@hotmail.co.uk".freeze, "info@ttanimichi.com".freeze]
  s.homepage = "https://github.com/reactjs/react-rails".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.rubygems_version = "3.2.32".freeze
  s.summary = "React integration for Ruby on Rails".freeze

  s.installed_by_version = "3.5.16".freeze if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<appraisal>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<bundler>.freeze, ["= 2.4.9".freeze])
  s.add_development_dependency(%q<codeclimate-test-reporter>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<coffee-rails>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<es5-shim-rails>.freeze, [">= 2.0.5".freeze])
  s.add_development_dependency(%q<gem-release>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<guard>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<guard-minitest>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<jbuilder>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<listen>.freeze, ["~> 3.0.0".freeze])
  s.add_development_dependency(%q<capybara>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<selenium-webdriver>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<test-unit>.freeze, ["~> 2.5".freeze])
  s.add_development_dependency(%q<pry-byebug>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<package_json>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<rails>.freeze, ["~> 7.0.7".freeze, ">= 7.0.7.2".freeze])
  s.add_development_dependency(%q<turbo-rails>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<minitest-retry>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<connection_pool>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<execjs>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<railties>.freeze, [">= 3.2".freeze])
  s.add_runtime_dependency(%q<tilt>.freeze, [">= 0".freeze])
  s.add_runtime_dependency(%q<babel-transpiler>.freeze, [">= 0.7.0".freeze])
end
