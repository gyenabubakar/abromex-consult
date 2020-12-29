window.addEventListener('DOMContentLoaded', function () {
	// initalise emailjs
	emailjs.init('user_vFzVbBbC9qb1s6NjeylEl');
	console.log('emailjs initialised!');

	var form = document.querySelector('form');
	var submitBtn = document.querySelector('button#btn');

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		submitBtn.innerText = 'Submitting...';
		submitBtn.setAttribute('type', 'button');

		var templateParams = {
			user_name: form.querySelector('#username').value,
			user_email: form.querySelector('#email').value,
			subject: form.querySelector('#subject').value,
			message: form.querySelector('#body').value,
		};

		emailjs
			.send('service_id1uk8k', 'template_7o438n5', templateParams)
			.then(function (response) {
				var successDiv = document.querySelector('#email-ok');

				successDiv.style.right = 0;

				submitBtn.innerText = 'Submit message';
				submitBtn.setAttribute('type', 'submit');

				setTimeout(function () {
					successDiv.style.right = '-350px';

					window.location.reload()
				}, 5000);
			})
			.catch(function (error) {
				var failDiv = document.querySelector('#email-nok');

				failDiv.style.right = 0;

				submitBtn.innerText = 'Submit message';
				submitBtn.setAttribute('type', 'submit');

				setTimeout(function () {
					failDiv.style.right = '-350px';
				}, 5000);

				throw error;
			});
	});
});
