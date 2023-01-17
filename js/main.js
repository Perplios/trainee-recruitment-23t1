const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

const init = () => {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';

		main.style.display = 'block';
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 4000);
};

init();

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('#menu');
toggle.onclick = function () {
	menu.classList.toggle('active');
};

const cursor = document.getElementById('circle-cursor');
const cursorStyle = cursor.style;

document.addEventListener('mousemove', (e) => {
	window.requestAnimationFrame(() => {
		cursorStyle.top = `${e.clientY - cursor.offsetHeight / 2}px`;
		cursorStyle.left = `${e.clientX - cursor.offsetWidth / 2}px`;
	});
});
