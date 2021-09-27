FROM node:14.17.1

LABEL version="1.0"
LABEL description="Demo of a Medicare claims data sample app"

WORKDIR /server

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn","start"]