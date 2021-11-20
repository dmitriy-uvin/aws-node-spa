FROM node:12-alpine

WORKDIR /app

COPY . .

RUN ./scripts/deploy.sh

EXPOSE 5555

CMD ["node", "server.js"]
