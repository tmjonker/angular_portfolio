# Stage 1
FROM node:18.10 as node
RUN DEBIAN_FRONTEND=noninteractive
WORKDIR /app
COPY . .
RUN npm install @angular/cli -g
RUN npm install
RUN ng build

#Stage 2
FROM nginx:alpine
COPY --from=node /app/ng-project/dist /usr/share/nginx/html
EXPOSE 80