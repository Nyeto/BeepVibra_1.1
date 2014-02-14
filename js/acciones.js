// JavaScript Document
$(document).ready(function() {//linea a fuerza
	document.addEventListener("deviceready",function(){
		$('#b1').tap(function(){
			navigator.notification.beep(2);
			
		});//tap1
				
	});//deviceready
});//ready