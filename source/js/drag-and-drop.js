import { showAddCardButton } from './render.js';

// DRAG AND DROP

document.addEventListener('mouseover', () => {

	const cards = document.querySelectorAll('.card');
	const lists = document.querySelectorAll('.list_wrap');
	let dragItem = '';

	function dragStart(evt) {
		dragItem = this;
		setTimeout(() => this.style.display = 'none', 0);
		evt.target.classList.add('selected');
	}

	function dragEnd(evt) {
		evt.target.classList.remove('selected');
		setTimeout(() => this.style.display = 'block', 0);
		dragItem = '';
	}

	function drop() {
		this.insertBefore(dragItem, this.children[1]);
		showAddCardButton(this);
		this.style.backgroundColor = '#353535d2'
	}

	function dragOver(evt) {
		evt.preventDefault();
		this.style.backgroundColor = '#686868';
	}

	function dragEnter(evt) {
		evt.preventDefault();
		this.style.backgroundColor = '#353535d2';
	}

	function dragLeave() {
		this.style.backgroundColor = '#353535d2';
	}

	for (const card of cards) {
		card.draggable = true;
		if (card.classList.contains('card--unactive') || card.classList.contains('form')) {
			card.draggable = false;
		}
		card.addEventListener('dragstart', dragStart);
		card.addEventListener('dragend', dragEnd);
	}

	for (const list of lists) {
		list.addEventListener('dragover', dragOver);
		list.addEventListener('dragenter', dragEnter);
		list.addEventListener('dragleave', dragLeave);
		list.addEventListener('drop', drop);
	}
});