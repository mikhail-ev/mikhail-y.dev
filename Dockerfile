FROM node:13.14.0-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV env production

ENV port 3000

CMD npm start
