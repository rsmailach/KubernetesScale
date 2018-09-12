FROM node:6-alpine
COPY package.json package-lock.json ./
RUN npm install
COPY index.js ./
CMD ["npm", "start"]