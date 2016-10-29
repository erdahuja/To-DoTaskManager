var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
{
	var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username != "" && password != ""){
logincheck(username, password);
return true;
}
else{
attempt --;// Decrementing by one.
	alert("Username and Password is empty");
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

function logincheck(username, password)
{
	var name=username;
	var password2=password;
	if (window.Promise) {
            console.log('Promise found');
            var promise = new Promise(function(resolve, reject) {
                var request = new XMLHttpRequest();

                request.open('GET', '../server/login.json');
                request.onload = function() {
                    if (request.status == 200) {
                        resolve(request.response); // we got data here, so resolve the Promise
                    } else {
                        reject(Error(request.statusText)); // status is not 200 OK, so reject
                    }
                };

//                request.onerror = function() {
//                    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
//                };

                request.send(); //send the request
            });

            console.log('Asynchronous request made.');

            promise.then(function(data) {
                console.log(data);
                //document.getElementById('div1').innerHTML = JSON.parse(data).username+ " "+JSON.parse(data).password;
				var nameis=JSON.parse(data).username;	
				var pwdis=JSON.parse(data).password;
				
				if(name == nameis && password2 == pwdis){
					window.location = "taskmanager.html";
				}
				else{
					alert ("Username and Password is not correct");
					window.location = "index.html";
				}

            }, function(error) {
                console.log('Promise rejected.');
                console.log(error.message);
            });
        } else {
            console.log('Promise not available');
        }
}
return (true);
}