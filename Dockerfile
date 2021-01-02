FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /srv/mailtrap

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1025
EXPOSE 8025

CMD ["node", "lib/index.js"]
