# 1. Use Node 20 LTS Alpine
FROM node:20-alpine

# 2. Set working directory
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json first
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the project
COPY . .

# 6. Generate Prisma client
RUN npx prisma generate

# 7. Build NestJS app
RUN npm run build

# 8. Expose NestJS port
EXPOSE 3000

# 9. Start NestJS server
CMD ["node", "dist/main.js"]
