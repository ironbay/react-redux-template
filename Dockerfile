FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
ADD . /tmp/app
RUN cd /tmp/app && npm install && npm run build

CMD rm -rf /www/app && cp -R /tmp/app /www/app
