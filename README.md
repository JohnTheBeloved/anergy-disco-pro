## About this Project

This project is a simple backend service application written as a test assesement of technical abilities of Software manager role for Anergy power company by John Alade.

For more information please contact John by mailing [topzy20@yahoo.com](topzy20@yahoo.com)

## Problem Solved
The project was written as a solution to the problem below  

```
Using the information below, create an authentication API for a supermarket with the roles A, B & C.
 
A) SUPERVISOR
● Manages product categories
● Manages products
● Manages Employees
● Manages Clients
● Broadcasts Message

B) EMPLOYEE

C) CLIENT

Note: Define necessary roles for the user types citing Role A as an example.

Our Preferred Framework/Tools
NodeJS
Express (Frameworks allowed)
NoSQL (MongoDB, etc.)

Create a git or any repo of your choice for the project. You are expected to commit your code regularly while coding. Using any free cloud environment, deploy your project. 

END

```

## Deployment
The Deployed version was deployed on [heroku](https://www.heroku.com) can be viewed on [here](https://anergy-mart-pro.herokuapp.com) , Please note that heroku free deployed applications go into a sleep mode if not accessed for about 30 minutes and therefore would take some time for the application bootstrap and to load up.

## Development Framework 
The language used was Express framework, Other libraries include
- express-jwt, to encode & decode jwt tokens
- joi for API validation
- Database is mongodb (Make sure you have mongodb installed)


Development Requirements / Tools
-------------------------

Make sure you install [npm] node package manager on your system, this can be installed based on your operating system

### NPM/Node 

Please skip this section if you already use node on your System

Visit the [nodejs](https://nodejs.org/en/download/) website and download the node installer, after then run and Install on your system

After installation, open a new command prompt and type in  these commands

* `npm -v` which should show you the current version of npm installed on your system

  Version print out should be like `6.xx.x`


* `node -v` should show you the current version of node installed on your system

Version print out should be like `v14.10.0`

### GIT
* `git --version` should show you the current version of git installed on your system

## Checking out the Project source code on your system

Open the command line and navigate to the folder you wish to create the project

Also install git on system by downloading and run the following code

```
git clone  [https://github.com/JohnTheBeloved/anergy-disco-pro.git](https://github.com/JohnTheBeloved/anergy-disco-pro.git)
```

Create your branch from the master branch

```
git checkout -b <branch-name>
```

Install project dependecies

```
npm install
```


After checking out your branch, the tree project folder structure should be similar to the one below

```
anergy-mart-pro/               .......Project root folder
  README.md                       .......Project Doc
  node_modules/                   .......Node modules folder
  package.json                    .......Project config 
  public/                         .......Project public access folder
    index.html 
    favicon.ico
  src/                            .......Development source files
    controllers/                  .......Controllers for the models
    routes/                       .......contains the respective API routes
    models/                       .......Mongo DB types, models and schema
    middleware/                   .......Custom middleware
    utils/                        .......Some utility functions

```

## Running the Project

To run the project in development mode

Type in to your command line

```
npm run start_dev
```

After running this command, your project is expected to open up on your default browser

## Deploying project locally

To deploy the project locally, run

```
npm build
```
After running this command, your project is found in the `build` folder under the project root folder

## Deploying the Project on Heroku


```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Database instance 

[MongoDB Atlas](https://cloud.mongodb.com/v2/60eb2b5282912e506776d635#clusters/connect?clusterId=Cluster0)


## API services

- Employee Mangement
- Authentication/Authorization
- Product Management
- Message Broadcasts

## Testing the API

1. Testing the **SUPERVISOR** role
  - Create a employee with **SUPERVISOR** role
  ```
  {
      "firstname": "First",
      "lastname": "Employee",
      "username": "first.employee",
      "password": "password",
      "role": "SUPERVISOR"
  }
  ```
  - Sign in with the supervisor login credentials and save the JWT token returned, use the token as a Bearer authentication header to call the following APIs 
  ```
  {
    "username": "first.employee",
    "password": "password"
  }
  ```
  - Create a Product Category
  ```
  {
    "name": "Rechargeable Fans"
}
  ```
  - Create 3 Products
  ```
  {
    "name": "Anergy 12' Portable Rechargeable Fan",
    "category": {
        "_id": "60eb4dd057faa7e751c0f57a"
    }
  }
  ```
  - Create 3 Clients
  ```
  {
    "firstname": "First",
    "lastname": "Client",
    "username": "first.client",
    "password": "password",
    "role": "CLIENT"
  }
  ```
  - Create a message
  ```
  {
    "content": "Rechargeable fans are now available ",
    "medium": "SMS"
  }
  ```
  - Broadcast a message to clients

2. Testing the **EMPLOYEE** role
  - Create a new employee with the **EMPLOYEE** role
  ```
   {
       "firstname": "Second",
       "lastname": "Employee",
       "username": "second.employee",
       "password": "password",
       "role": "EMPLOYEE"
   }
  ```
  - Read all the Product Categories
  - Read all the Products
  - Try deleting a Product category or product (should be unauthorized)

3. Testing the **CLIENT** role
  - Create a client using the **SUPERVISOR** role's token (Token for other roles are undefined)
  - Login with the Client's *username* and *password* and get your client token
  - Read all Products
