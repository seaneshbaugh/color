FROM node:12.10-alpine

ENV WEBPACK_DEV_SERVER_PORT 8080

RUN mkdir /color

WORKDIR /color

COPY package.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install

EXPOSE $WEBPACK_DEV_SERVER_PORT

CMD ["yarn", "run", "start"]
