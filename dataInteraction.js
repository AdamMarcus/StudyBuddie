//var UserName = "allie";
//var className = "CSCI-2270";
//<script>

<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
var myDataRef = new firebase('https://studybuddee.firebaseio.com/');

alert("WASSSURP");

function addUserToDataBase(_userName, _email, _courseCode)
{
    var dbResponse = myDataRef.on('value', function(snapshot));
    var dbResponseClass = dbResponse[className];

    if(dbResponseClass){
        alert(dbResponseClass);
        dbResponse[className].push(userName);
    } else {
        dbResponse[className]=[userName];
    }

    myDataRef.set(dbResponse);
}
//</script>
