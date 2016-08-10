FROM node:5

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY *.sh *.js package.json ./
RUN npm install
ENTRYPOINT["start_consumer.sh"].

