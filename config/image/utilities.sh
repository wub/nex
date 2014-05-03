#!/bin/bash
set -e
source /build/buildconfig
set -x

$minimal_apt_get_install build-essential git libcurl4-openssl-dev zlib1g-dev

## For image_optim
$minimal_apt_get_install yasm install imagemagick libmagickwand-dev advancecomp gifsicle jhead jpegoptim libjpeg-progs optipng pngcrush

## Video, audio
apt-get -y install ffmpeg
