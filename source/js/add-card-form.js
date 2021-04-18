import { showAddCardButton } from './render.js';
import { onButtonClick } from './card-unactive.js';

// МОДУЛЬ ВЫЗОВА ФОРМЫ ДОБАВЛЕНИЯ КАРТОЧКИ
const addNewCardButtons = document.querySelectorAll('.new_card');
const addCardFormTemplate = document.querySelector('#new_card_form')
	.content
	.querySelector('.new_card_form');

const cardTemplate = document.querySelector('#new_card')
	.content
	.querySelector('.card');

addNewCardButtons.forEach((button) => {

	const onAddNewCardButtonClick = () => {

		const newForm = addCardFormTemplate.cloneNode(true);
		const description = newForm.querySelector('[name="card_text"]');
		const importantIcon = newForm.querySelector('.is_important path');
		const addButton = newForm.querySelector('[type="submit"]');
		const cancelButton = newForm.querySelector('[type="reset"]');

		const onDescriptionInput = () => {
			if (description.scrollTop > 0) {
				description.style.height = description.scrollHeight + "px";
			}
		}

		const onImportantIconClick = () => {
			importantIcon.classList.toggle('button--important');
		};

		const onCancelButtonClick = () => {
			newForm.parentElement.removeChild(newForm);
			button.classList.remove('hidden');
			importantIcon.removeEventListener('click', onImportantIconClick);
			description.removeEventListener('input', onDescriptionInput);
			cancelButton.removeEventListener('click', onCancelButtonClick);
		}

		const onAddButtonClick = (evt) => {

			importantIcon.removeEventListener('click', onImportantIconClick);
			description.removeEventListener('input', onDescriptionInput);

			evt.preventDefault();

			const title = newForm.querySelector('[name="card_title"]').value;
			const descriptionText = newForm.querySelector('[name="card_text"]').value;
			const theme = newForm.querySelector('[name="card_theme"]').value;
			const isImportant = newForm.querySelector('.is_important path').classList.contains('button--important');

			if (!title) {
				return;
			}

			newForm.parentElement.removeChild(newForm);
			button.classList.remove('hidden');

			const newCard = cardTemplate.cloneNode(true);
			newCard.querySelector('.card_title').textContent = title;
			newCard.querySelector('.card_text').textContent = descriptionText;

			if (theme) {
				newCard.querySelector('.card_theme').textContent = theme;
			} else {
				newCard.querySelector('.card_theme').classList.add('hidden');
			}

			if (isImportant) {
				newCard.classList.add('card--important');
			}

			button.parentElement.insertBefore(newCard, button.parentElement.children[1]);

			const checkNewCardButton = newCard.querySelector('.card_check');
			checkNewCardButton.addEventListener('click', () => onButtonClick(checkNewCardButton));
			newForm.reset();
			showAddCardButton(newForm.parentElement);
		}

		importantIcon.classList.remove('button--important');
		button.classList.add('hidden');
		button.parentElement.append(newForm);

		description.addEventListener('input', onDescriptionInput);
		importantIcon.addEventListener('click', onImportantIconClick);
		addButton.addEventListener('click', onAddButtonClick)
		cancelButton.addEventListener('click', onCancelButtonClick);
	}

	button.addEventListener('click', onAddNewCardButtonClick);
});