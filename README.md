# CRUD-API
## Install
Install all the required dependecies "npm install".


## Run the API
Enter the command "node server.js"

## CREATE Student_datails
### Request
`POST /api/student`content-type: applicatio/json`
 Body- { 
     "name":<name>,
     "ROllNo":<rollno>,
     "branch":<branch>,
     "skill":<skill>
  }
### Response
{
  "success": 1,
  "message": "Student details created successfully"
}
## Get students by Branch
### Request
`GET  `/api/student?Branch=<branch_name>&page=<page no>&size=<size limit>`content-type: applicatio/json`
### Response

{
  "success": 1,
  "message": [
    {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    },
    .
    .
    .
    {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    }
  ]
}

## Get Students by Skill
### Request
`GET  `/api/student?skill=<skill_name>>&page=<page no>&size=<size limit>`content-type: applicatio/json`
### Response

{
  "success": 1,
  "message": [
    {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    },
    .
    .
    .
    {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    }
  ]
}

## Get a particular student by Roll NO
### Request
  `Get `/api/student?RollNo=<RollNo>`content-type: applicatio/json`
  
### Response
{
  "success": 1,
  "message":
    {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    }
}

### DELETE Student By Roll No
### Request
  `DELETE` /api/student?RollNo=<RollNo>`content-type: applicatio/json`
  
### Response
{
  "success": 1,
  "message": "Student details deleted successfully!"
}


## Update Student Details by Roll NO
### Request
`PATCH`/api/student?RollNo=<RollNo>`content-type: applicatio/json`
 
 Body  {add the details which you want to update in JSON format}
  
### Response
{
  "success": 1,
  "message": {
      "_id": <id>,
      "name": <name>,
      "branch": <branch>,
      "skill": <skill>,
      "RollNo": <rollno>
    }
}
