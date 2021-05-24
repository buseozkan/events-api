FROM node:8-alpine

RUN apk add --no-cache openssl curl

WORKDIR /usr/bin

RUN wget https://raw.githubusercontent.com/visiosound/jwks4jwt/master/releases/jwks4jwt_linux_386 \
     -O jwks4jwt

RUN chmod +x jwks4jwt

COPY docker-entrypoint.sh docker-entrypoint

RUN chmod +x docker-entrypoint

ENTRYPOINT ["sh", "/usr/bin/docker-entrypoint"]

WORKDIR /usr/local/jwks-jwt

COPY package.json ./
RUN yarn install --non-interactive && yarn cache clean

COPY index.js ./

EXPOSE 8088

HEALTHCHECK --start-period=5s --interval=5s CMD curl -sf http://localhost:8088 > /dev/null

CMD ["jwks-jwt"]