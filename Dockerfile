FROM node:22-bookworm-slim AS rebuild

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /rebuild
RUN npm install better-sqlite3

FROM node:22-bookworm-slim

WORKDIR /app

COPY .output .output
COPY --from=rebuild /rebuild/node_modules/better-sqlite3/build /app/.output/server/node_modules/better-sqlite3/build

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
