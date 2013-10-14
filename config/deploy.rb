set :application, 'color'
set :repo_url, 'git@github.com:seaneshbaugh/color.git'

set :scm, :git

namespace :deploy do
  desc 'Restart application'
  task :restart do
    # intentionally blank
  end

  after :finishing, 'deploy:cleanup'
end
