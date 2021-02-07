const mongo = require("mongodb");
const Client = mongo.MongoClient;
class DB {
    constructor(input){
        if(!input){
	    throw new Error("No input given");
	}else{
	    if(typeof(input) == "string"){
		this.url = input;
		Client.connect(url, function(err, db) {
                    if (err) throw err;
                    this.db = db;
                });
	    }else if(typeof(input) == "object"){
		if(input.host && input.port && (input.db || input.dbName)){
		    //Connect with data provided as an object here but ill skip this
		    throw new Error("Invalid Input");
		}else{
		    throw new Error("Invalid Input");
		}
	    }else{
		throw new Error("Invalid input");
	    }
	}
    }
}

module.exports = DB;
