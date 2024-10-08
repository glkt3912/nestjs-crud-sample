FROM node:20 as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
RUN yarn build

FROM node:20 as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/start.sh ./start.sh
EXPOSE 8080
RUN chmod +x ./start.sh
CMD /bin/bash -c "./start.sh"