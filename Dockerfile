FROM wearkinetic/node:master

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install --no-optional
RUN cp -a /tmp/node_modules .

ADD . .
RUN npm run build

CMD rm -rf /www/web && cp -a ./build /www/web
