FROM node:20 as builder
ENV NODE_ENV=development
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma
RUN yarn install
RUN yarn prisma generate
COPY . .
RUN yarn build

FROM node:20 as runner
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
# Copy dist directory before yarn install
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY prisma ./prisma
COPY start.sh ./
RUN chmod +x ./start.sh
CMD ["./start.sh"]