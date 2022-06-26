FROM node:latest

ENV SERVER_URL=http://localhost:3001

WORKDIR /demo-web

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start"]