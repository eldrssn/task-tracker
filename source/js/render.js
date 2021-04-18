import { data } from './data.js';

// МОДУЛЬ С ОТРИСОВКОЙ КАРТОЧЕК
const listTemplate = document.querySelector('#list_wrap')
	.content
	.querySelector('.list_wrap');

const cardTemplate = document.querySelector('#new_card')
	.content
	.querySelector('.card');

const pageWrap = document.querySelector('.page_wrap');

const showAddCardButton = (parent) => {
	const addCard = parent.querySelector('.new_card');
	parent.appendChild(addCard);
}

const newListFragment = document.createDocumentFragment();

const renderList = (list) => {
	list.forEach((card) => {
		const newList = listTemplate.cloneNode(true);
		newList.querySelector('.list_title').textContent = card[0].listTitle;

		for (let i = 1; i < card.length; i++) {
			const newCard = cardTemplate.cloneNode(true);
			newCard.querySelector('.card_title').textContent = card[i].title;
			newCard.querySelector('.card_text').textContent = card[i].description;

			if (card[i].theme) {
				newCard.querySelector('.card_theme').textContent = card[i].theme;
			} else {
				newCard.querySelector('.card_theme').classList.add('hidden');
			}

			if (card[i].isImortant) {
				newCard.classList.add('card--important');
			}
			newList.appendChild(newCard);
		}
		showAddCardButton(newList);
		newListFragment.appendChild(newList);
	});
	pageWrap.appendChild(newListFragment);
}
renderList(data);

export { showAddCardButton };