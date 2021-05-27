# 04-finalproj-4amigos-server

This server repository requires the client repository:

## Getting Started: ##
To get the server started follow these steps:
1. Install the dependencies:
    `npm install`
2. Start the server: 
   `npm start`
3. Start a local docker container (make sure that your docker desktop is open):
   `npm run dockercompose`
4. When the docker container is running successfully in docker desktop free of errors you need to do database migration to start your databases run the following command in your terminal:
   `docker-compose run api npm run db:migrate` 
5. Finally, if you have successfully started the server and successfully started the client repository, you should see a populated drop down menu and have the ability to save your filled out surveys to the database.

## AWS ##
To have a view at the cloud production version of this application, follow these steps to retrieve the link:
1. make sure you are using the right profile:
     `export AWS_PROFILE=copilot`
2. use the following command to see the pipeline information:
    `copilot svc show`
3. choose an environment to view information about: click api or client
### contributions ### 
#### Chris Anderson #### 
- package.json:
  - installed dependencies:
    - cors
    - express
    - node.js
    - jest
    - pg-migrator
    - pg
- docker-compose.yml:
  - docker-compose yml file
- copilot:
  - copilot pipeline.yml adjustments to meet application requirements
- app.js:
  - 
  - Healthcheck route
  - All reviews route (to be used on version 2)
- db-migrate:
  - 2-3.sql
  - 3-2.sql
    - Database mock data migration using Postgresql and pg db migration
- persondb.test.js:
  - Testing using Jest and Supertest
- server.js
- db.js

#### Carlee Laws ####
- db-migrate:
  - 1-2.sql & 2-1.sql
    - Database table migration using Postgresql and pg db migration
- persondb.js:
  -  making queries to the postgresql database to return to the routes using pool queries
- app.js:
  - get requests:
    - student
    - instructors
  - post request:
    - review
- review.js:
    - sql query to create a new review into the databases

