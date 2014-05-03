# mod.sh

#!/bin/bash
/etc/init.d/redis-server start

source /etc/profile.d/rvm.sh
bundle exec puma -D -p 8080

nginx
