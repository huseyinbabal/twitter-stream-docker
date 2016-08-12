FROM node:5

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY start_stream.sh *.js package.json ./
RUN npm install
ENTRYPOINT ["sh", "start_stream.sh"]
