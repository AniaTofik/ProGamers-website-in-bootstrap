document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
	const navbarToggler = document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 0) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	nav.addEventListener('click', addShadow);

	const homeLink = document.querySelector(
		'.navbar-nav .nav-link[href="#home"]'
	);

	navLinks.forEach((link) => {
		link.addEventListener('click', function () {
			if (window.getComputedStyle(navbarToggler).display === 'block') {
				navbarToggler.click();
			}
		});
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', function () {
			navLinks.forEach((link) => {
				link.classList.remove('active');
			});
			this.classList.add('active');
			if (this !== homeLink) {
				homeLink.classList.remove('active');
			}
		});
	});

	window.addEventListener('scroll', addShadow);
});
