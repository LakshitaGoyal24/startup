const exp=require('express')
const app=exp()
require('dotenv').config()
const mongoClient=require('mongodb').MongoClient

mongoClient.connect(process.env.DB_URL)
.then(client=>{
    //get db obj
    const blogdb=client.db('startupdb')
    //get collection obj
    //const startupCollection=blogdb.collection('startupCollection')
    //share colelction obj with express app
    //app.set('startupCollection',startupCollection)
    //confirm db connection status
    console.log("DB connection success")
})
.catch(err=>console.log("Err in DB connection",err))
const port=process.env.PORT || 5000

app.listen(port,()=>{console.log(`Server running on port ${port}`);})