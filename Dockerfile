# Stage 1
FROM node:18.10 as node
RUN DEBIAN_FRONTEND=noninteractive
WORKDIR /app
COPY . .
RUN npm install @angular/cli -g
RUN npm install
CMD ["ng", "build"]

#Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ng-project /usr/share/nginx/html
EXPOSE 80