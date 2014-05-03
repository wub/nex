#!/bin/bash
set -e
source /build/buildconfig
set -x

## Brightbox Ruby PPA
add-apt-repository -y ppa:brightbox/ruby-ng

## Chris Lea's Node.js PPA
add-apt-repository -y ppa:chris-lea/node.js

## Rowan's Redis PPA
add-apt-repository -y ppa:rwky/redis

## FFmpeg for da vids
add-apt-repository -y ppa:jon-severinsson/ffmpeg

apt-get update
