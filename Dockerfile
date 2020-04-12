FROM node:7

WORKDIR /usr/src/app

COPY /app/package.json /.

RUN npm install

COPY /app /usr/src/app

EXPOSE 8080

CMD [ "node", "index.js" ]