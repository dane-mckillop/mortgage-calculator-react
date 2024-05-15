FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

EXPOSE 3000

COPY . .

CMD ["pnpm", "run", "dev"]