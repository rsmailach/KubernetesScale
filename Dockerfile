FROM node:6-alpine
COPY index.js ./
CMD ["node", "./index.js"]