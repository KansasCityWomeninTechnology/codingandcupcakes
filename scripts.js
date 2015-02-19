(function() {
   var headerHeight = document.getElementsByClassName('header')[0].clientHeight;
	var instructions = document.getElementById('instructions');
	var navItem = document.getElementById('show-instructions');
	instructions.style.top = headerHeight + 'px';

	navItem.addEventListener("click", function() {
		if(document.getElementsByClassName('show-menu').length === 0) {
			instructions.classList.add("show-menu");
		}
		else {
			instructions.className = ('')
		}
		
	});

})();

