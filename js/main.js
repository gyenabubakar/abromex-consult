window.addEventListener('DOMContentLoaded', function () {
	var hamburger = document.querySelector('#toggle-sm-nav');
	var mobileNav = document.querySelector('#mobile-nav-wrapper');

	hamburger.onclick = function () {
		mobileNav.style.top = 0;
	};

	document.documentElement.onclick = function (e) {
		if (!(e.target.getAttribute('id') === 'mobile-nav-wrapper')) {
			return;
		}

		mobileNav.style.top = '-100vh';
	};
});
