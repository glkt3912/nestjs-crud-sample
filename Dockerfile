FROM node:20 as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY prisma ./prisma
# RUN yarn prisma generate
RUN npx prisma migrate deploy
RUN npx prisma generate
COPY . .
RUN yarn build

FROM node:20 as runner
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
ENV NODE_ENV production
# Copy dist directory before yarn install
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/start.sh ./start.sh
EXPOSE 8080
RUN chmod +x ./start.sh
CMD ["./start.sh"]