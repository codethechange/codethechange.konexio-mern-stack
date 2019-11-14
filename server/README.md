# server-side
MongoDB, Express, Node

# [DO THIS] jwt secret 
type this in terminal in the main konexio-mern-stack folder
echo "JWT_SECRET=MSGMEFORTHEJWTSECRET" >> ./server/src/.env

### Server-side usage(PORT: 8000)
(I am sure you need to add a JWT_SECRET in .env to connect to MongoDB -> make it run -> check your terminal for instructions
)
```terminal
$ cd server
$ npm i
$ npm run dev
```

### Deploy to Heroku
docs is [here](https://github.com/amazingandyyy/mern-stack#deploy-server-to-heroku)

# Dependencies(tech-stack)
| Server-side
| ---
| bcrypt-nodejs: ^0.0.3
| body-parser: ^1.15.2
| cors: ^2.8.1
| dotenv: ^2.0.0
| express: ^4.14.0
| jwt-simple: ^0.5.1
| mongoose: ^4.7.4
| morgan: ^1.7.0


## Author
[Amazingandyyy](amazingandyyy.github.io)

### License
[MIT](https://github.com/amazingandyyy/eventbrite-api/blob/master/LICENSE)
