FROM --platform=linux/amd64 node:20.18.0-bullseye-slim as builder
EXPOSE 4200

WORKDIR /project

RUN npm install -g @angular/cli@18.2.12

COPY ./nmap-frontend/package.json ./nmap-frontend/package-lock.json /project/
RUN npm ci

COPY ./nmap-frontend/ /project/

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
