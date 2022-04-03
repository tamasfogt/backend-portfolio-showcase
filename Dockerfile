FROM node:12.18.1 as base

WORKDIR /app

COPY package*.json ./


FROM base AS development

RUN npm i

# Copy source code 
# COPY . .

CMD [ "npm", "run", "start" ]


FROM base AS test

RUN npm ci

# Copy source code 
# COPY . .

CMD [ "npm", "run", "test" ]


FROM base as prod
# Install app dependencies
RUN npm ci --production

# Copy source code 
COPY . .

# TODO itt majd akár egy build vagy vmi hasonló...

# start server 
CMD [ "nprm", "run", "prod" ]

EXPOSE 3000

##  a base ből csinál egy test image-t  hasonlóan mint a prodot   docker build -t node-docker --target test . <- így kell futtatni, ebből kell majd csinálni egy compose file-t 
# ENV NODE_ENV=production   ez nem biztos hogy kell 