FROM node:5

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY *.html *.sh *.js package.json ./
RUN npm install
ENTRYPOINT ["sh", "start_ui.sh"]
