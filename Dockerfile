FROM node

RUN npm install -g nodemon

COPY package.json .

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 6000

CMD ["npm", "run", "dev"]

