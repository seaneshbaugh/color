set :stage, :production

server 'seaneshbaugh.com', user: 'seaneshb', roles: %w{web app}

set :branch, 'master'

set :deploy_to, '/home/seaneshb/color'

set :tmp_dir, "/home/seaneshb/tmp"
