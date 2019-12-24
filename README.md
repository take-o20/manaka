# manaka

## Build backend environment
```
whoami$ cd man_back
whoami$ docker-compose up -d
whoami$ cd database
whoami$ prisma deploy //this is make database model

```

## Build front environment
```
whoami$ cd man_front
whoami$ cp .env.example .env

whoami$ yarn install
//or
whoami$ npm install

whoami$ yarn start
//or
whoami$ npm start
```
