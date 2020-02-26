FROM node:12.16.1

WORKDIR ./
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run bundle
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
