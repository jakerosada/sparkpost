# sparkpost

# This project is a take home coding exercise for SparkPost

## SparkPost API:

### Endpoint - /sparkpost

POST - post a new user to our user records.

EXAMPLE request:
```
{
"name": string,
"age": integer
}
```
EXAMPLE response:
{
"message": "Succesfully Added!",
"name": "jake rosada",
"age": 26
}

GET - retrieve all users and ages

EXAMPLE response
[
{
"name": "jake rosada",
"age": 26
}
]

PUT - update a users age
EXAMPLE request
{
"name": "jake rosada",
"age": 32
}
-The name parameter is the name of the user you wish to update and the age parameter is the new age you wish to save
EXAMPLE response
{
"message": "Succesfully Updated!",
"name": "jake rosadea",
"age": 22
}

### Endpoint - /sparkpost/:name

GET - retrieve a specific users information

EXAMPLE request
/sparkpost/jakerosada

EXAMPLE response
{
"name": "jake rosada",
"age": 26
}

## DOCKER:

Build command - docker build -t sparkpost .

Run command - docker run -d -p 8000:8000 -e PORT=8000 sparkpost
