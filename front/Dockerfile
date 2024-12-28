FROM node:16

WORKDIR /front

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

ENV NODE_ENV=development

EXPOSE 4000

CMD ["npm", "run", "dev"]
