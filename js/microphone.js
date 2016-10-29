$('#microphone').click(function(){
	$('#myModal').modal();
	$('#textemail').val('');
	var recognizer = new webkitSpeechRecognition();
	recognizer.lang = "en";
	recognizer.onresult = function(event) {
	   if (event.results.length > 0) {
	   	
	       var result = event.results[event.results.length-1];
	       if(result.isFinal) {
	       	
	           $('#textemail').val(result[0].transcript);
	         
	       }
	   }  
	   
	};
	recognizer.start();
});