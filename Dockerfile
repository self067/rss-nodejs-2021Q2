FROM node:14.17-alpine
ENV NODE_ENV=production
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
