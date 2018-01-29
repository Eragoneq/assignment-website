setTimeout(function(){
	document.getElementById("intro").style.height = (document.getElementById('my-slider').getBoundingClientRect().height);
	console.log(document.getElementById('my-slider').getBoundingClientRect().height);
}, 1);

window.addEventListener('resize', function() {
	document.getElementById("intro").style.height = (document.getElementById('my-slider').getBoundingClientRect().height);
}, false);
