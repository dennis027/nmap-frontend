

FROM --platform= node:20.18.0-bullseye-slim as builder
EXPOSE 4200
RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@18.2.12

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

FROM builder as dev-envs


COPY --from=gloursdocker/docker / /
