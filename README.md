# sparkpost
This project is a take home coding exercise for SparkPost

SparkPost API:

Endpoint - /sparkpost

POST - post a new user to our user records. 

EXAMPLE request:
{
  "name": string,
  "age": integer
 }
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

Endpoint - /sparkpost/:name

GET - retrieve a specific users information

EXAMPLE request
/sparkpost/jakerosada

EXAMPLE response
{
    "name": "jake rosada",
    "age": 26
}
