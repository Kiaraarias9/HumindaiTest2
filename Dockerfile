FROM node:18
WORKDIR /app
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "start", "--host"]
