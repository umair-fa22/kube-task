FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm init -y && npm install
CMD ["node", "app.js"]
EXPOSE 8080