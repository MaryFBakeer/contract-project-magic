FROM node:21-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY package.json . 
COPY package-lock.json . 
RUN npm i
COPY . .  
EXPOSE 3000
CMD ["nodemon", "app.js"]