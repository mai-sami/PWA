FROM node:14-alpine3.14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.20.1-alpine

WORKDIR /usr/share/nginx/html
COPY --from=build /app/build ./

CMD ["nginx", "-g", "daemon off;"]
