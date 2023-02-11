FROM node

WORKDIR /server

COPY package.json .

RUN npm i

COPY . .

EXPOSE 8080