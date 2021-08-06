FROM node:16
WORKDIR /usr/src/app
COPY package.json .
ENV PORT=6000
RUN yarn
COPY . .
EXPOSE 6000
CMD ["yarn", "dev"]
