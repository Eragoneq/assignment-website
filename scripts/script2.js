setTimeout(function(){
	document.getElementById("intro").style.height = (document.getElementById('my-slider').getBoundingClientRect().height);
}, 1);

window.addEventListener('resize', function() {
	document.getElementById("intro").style.height = (document.getElementById('my-slider').getBoundingClientRect().height);
}, false);

function wyslij(form){
	document.alert("Wysłano wiadomość");
	form.email.value = "";
	form.tresc.value = "";
};