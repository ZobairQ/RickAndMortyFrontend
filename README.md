# Rick And Port Frontend

## How To launch the application

You will need docker and docker compose 

Before you start any containers please manually create a the rick_and_morty network, if you don't already have it, using following command 

```docker network create rick_and_morty```

Command to start 
 ```docker compose up --build -d```
 This will start the application in docker and the frontend url would be localhost:3000