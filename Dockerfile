FROM gliderlabs/alpine:3.1
RUN apk --update add bash nodejs
WORKDIR /app

# Do this first so large npm installs are cached unless package.json changes
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --no-optional
RUN cp -R /tmp/node_modules ./

ADD . .
RUN npm run build
RUN rm -rf node_modules

# Run this container to deploy static files to /www
# Should link volumes-from your web server here
CMD rm -rf /www/changeme && cp -R /app /www/changeme
