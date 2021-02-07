const mongo = require("mongodb");
class DB {
    constructor(input){
        if(!input){
	    throw new Error("No input given");
	}else{
	    if(typeof(input) == "string"){
	    }else if(typeof(input) == "object"){
	    }else{
		throw new Error("Invalid input");
	    }
	}
    }
}
