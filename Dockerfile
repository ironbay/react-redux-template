FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
ADD . /tmp/hindsight-web
RUN cd /tmp/hindsight-web && npm install && npm run build

CMD rm -rf /www/hindsight-web && cp -R /tmp/hindsight-web /www/hindsight-web
