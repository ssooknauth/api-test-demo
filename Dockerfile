FROM node:10-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --silent

COPY . .

CMD sh "scripts/run-test.sh"
