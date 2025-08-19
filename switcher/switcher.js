document.addEventListener('DOMContentLoaded', function() {
	
	var colors = '';
	var server_url = ''; 
	var folder_url = 'css/colors/'; 

	// Style switcher
	const hideColor = document.querySelector('.hide-color');
	const customizeStyle = document.getElementById('custumize-style');
	
	if (hideColor) {
		hideColor.style.display = 'block';
	}
	
	if (customizeStyle) {
		customizeStyle.style.left = '-134px';
	}

	const switcher = document.querySelector('#custumize-style .switcher');
	if (switcher) {
		switcher.addEventListener('click', function(e) {
        e.preventDefault();
        const div = document.getElementById('custumize-style');
        const currentLeft = window.getComputedStyle(div).left;
        
        if (currentLeft === '-134px') {
            div.style.transition = 'left 0.3s ease';
            div.style.left = '0px';
            this.classList.add('open');
            this.classList.remove('closed');
        } else {
            div.style.transition = 'left 0.3s ease';
            div.style.left = '-134px';
            this.classList.add('closed');
            this.classList.remove('open');
        }
		});
	}
	
	//Text Color change:
	const colorLinks = document.querySelectorAll('#custom-color li a');
	colorLinks.forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			
		let colorsStyle = document.getElementById('colors-style');
		if (!colorsStyle) {
			colorsStyle = document.createElement('link');
			colorsStyle.href = '';
			colorsStyle.rel = 'stylesheet';
			colorsStyle.type = 'text/css';
			colorsStyle.id = 'colors-style';
			document.head.appendChild(colorsStyle);
		}
		
		const color_code = this.className;
		const parentUl = this.closest('ul');
		const allItems = parentUl.querySelectorAll('li');
		
		allItems.forEach(item => item.classList.remove('active'));
		colorsStyle.href = folder_url + color_code + '.css';
		this.parentNode.classList.add('active');
		});
	});
		
});