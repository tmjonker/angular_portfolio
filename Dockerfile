# Stage 1
FROM node:18.10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
RUN ls -a

#Stage 2
FROM nginx:alpine
COPY --from=node /app/ng-project/dist /usr/share/nginx/html
EXPOSE 80