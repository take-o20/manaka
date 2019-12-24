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

## Build back environment
```
whoami$ cd man_back
whoami$ cp .env.example .env

whoami$ yarn install
//or
whoami$ npm install

whoami$ yarn start
//or
whoami$ npm start
```

## error 
relation to @babel/core
plese read https://qiita.com/take_o/items/a81a52d40512ae1984c6
