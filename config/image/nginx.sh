#!/bin/bash
set -e
source /build/buildconfig
set -x

apt-get install -y nginx-extras passenger

cp /build/config/nginx.conf /etc/nginx/nginx.conf

## Install Nginx runit service.
mkdir /etc/service/nginx
cp /build/runit/nginx /etc/service/nginx/run
touch /etc/service/nginx/down
