var UserName = "allie";
var className = "CSCI-2270";

var dbResponse;
var dbResponseClass = dbResponse[className];

if(dbResponseClass){
  alert(dbResponseClass);
  dbResponse[className].push(userName);
} else {
  dbResponse[className]=[userName];
}

writeToDatabase(dbResponse);  
