const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class ShortService{
    
    async listshort(req){
        try{
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("short").find(req).toArray();
        datajson.close();
        return data
    }catch(err){
        console.log(err)
    }
    }

    async addshort(req){
        try{
            let datajson = await MongoClient.connect(pathdev.parsed.url)
            let dbo = datajson.db(pathdev.parsed.database);
            let data=await dbo.collection("short").insertOne(req);
            datajson.close();
            return data.result 
        }catch(err){
            console.log(err)
        }

    }


}
const shortService = new ShortService();
module.exports = shortService;