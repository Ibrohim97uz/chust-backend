# ---- Build Stage ----
    FROM node:22-alpine AS builder

    WORKDIR /usr/src/app
    COPY package.json package-lock.json ./

    RUN npm install -f
    COPY . .
    
    RUN npx --yes prisma generate --schema=./prisma/schema.prisma
    # Build application
    RUN npm run build 

    # ---- Production Stage ----
    FROM node:22-alpine AS production
    
    WORKDIR /usr/src/app
    
    
    COPY --from=builder /usr/src/app/node_modules ./node_modules
    COPY --from=builder /usr/src/app/dist ./dist
    COPY --from=builder /usr/src/app/package.json ./package.json
    COPY --from=builder /usr/src/app/prisma ./prisma
    COPY --from=builder /usr/src/app/keycloak_public_key.pem ./
    
    ENV NODE_ENV=production
    
    EXPOSE 5000
    
    CMD ["node", "dist/main.js"]
