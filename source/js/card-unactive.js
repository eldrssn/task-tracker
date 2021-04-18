import { showAddCardButton } from './render.js';

// МОДУЛЬ ДЛЯ ОТМЕТКИ КАРТОЧКИ ВЫПОЛНЕННОЙ
const BUTTON_DONE_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="check_icon" d="M4.16669 6.66667C6.45274 6.41266 8.38248 4.85263 9.10984 2.67054L9.74344 0.769751C9.89667 0.310064 10.3269 0 10.8114 0C11.744 0 12.5 0.756017 12.5 1.68861V5.83333H15.9446C17.1898 5.83333 18.1323 6.95905 17.9134 8.18491L16.5766 15.671C16.3925 16.7022 15.4439 17.4166 14.402 17.3088L5.96089 16.4356C4.94144 16.3301 4.16669 15.4711 4.16669 14.4462L4.16669 6.66667Z" fill="white"/>
<rect id="check_icon" y="6" width="2" height="10" fill="white"/>
</svg> `;

const checkButtons = document.querySelectorAll('.card_check');

const onButtonClick = (button) => {
	button.innerHTML = BUTTON_DONE_SVG;
	const buttonParent = button.parentElement.parentElement;
	buttonParent.draggable = false;

	buttonParent.classList.add('card--unactive');
	button.style.cursor = 'auto';

	buttonParent.parentNode.appendChild(buttonParent);
	showAddCardButton(buttonParent.parentNode);
}

checkButtons.forEach((button) => {
	button.addEventListener('click', () => onButtonClick(button));
})

export { onButtonClick };