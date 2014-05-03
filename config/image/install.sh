#!/bin/bash
set -e
source /build/buildconfig
set -x

/build/enable_repos.sh
/build/prepare.sh
/build/pups.sh
/build/utilities.sh
/build/ruby.sh;
/build/nodejs.sh
/build/redis.sh;

# Must be installed after Ruby, so that we don't end up with two Ruby versions.
/build/nginx.sh

/build/finalize.sh
