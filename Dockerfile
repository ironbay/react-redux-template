FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
WORKDIR /app

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --no-optional
RUN cp -R /tmp/node_modules ./

ADD . .
RUN npm run build
RUN rm -rf node_modules

CMD rm -rf /www/changeme && cp -R /app /www/changeme
