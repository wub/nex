FROM phusion/baseimage:0.9.9
ENV HOME /root
RUN mkdir /build
ADD . /build
RUN /build/install.sh
CMD "/sbin/my_init"
EXPOSE 80 443
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
