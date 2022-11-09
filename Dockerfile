# pull the base image
FROM node:alpine as builder

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY public ./public

COPY src ./src

# start app
RUN npm run build


# production environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
