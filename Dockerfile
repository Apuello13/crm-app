FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/dist/elyon-crm-app/browser ./browser
COPY --from=build /app/dist/elyon-crm-app/server ./server
COPY --from=build /app/package*.json ./

RUN npm install --production

EXPOSE 4000
CMD ["node", "server/server.mjs"]

