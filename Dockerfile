# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
ARG VITE_WAQI_TOKEN
ENV VITE_WAQI_TOKEN=$VITE_WAQI_TOKEN
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage — smallest nginx image
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
