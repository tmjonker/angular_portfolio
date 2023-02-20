#Stage 2
FROM nginx:alpine
COPY /dist/ng-project /usr/share/nginx/html
EXPOSE 80