import { Book } from '$lib/types';

export function getBooks(): Book[] {
	return [
		new Book(
			'Build',
			new Date('April 3, 2024'),
			5,
			'A goldmine of great advice for builders. Interesting anecdotes and insights from the world of tech. Highly recommended! Tony Fadell talks about all things involved in building great products and managing teams.'
		),
		new Book(
			'Proust and the Squid',
			new Date('April 12, 2024'),
			2,
			'A fascinating book about the history of reading and the brain. The second part of the book is a bit dry, but still interesting. In the first part, the author does a great job of explaining the history of reading. The second part is a lot about dyslexia and brain regions.'
		),
		new Book(
			'Scary Smart',
			new Date('April 20, 2024'),
			3,
			"A great book about the future of AI and the potential dangers. The book is a bit too esoteric at times, but still a good read. Mo Gawdat outlines his vision of the future and what we should do to make sure it's bright."
		),
		new Book(
			'The Inner Game of Tennis',
			new Date('April 26, 2024'),
			5,
			'Very interesting book about the mental side of tennis and beyond. The author does a great job of explaining how to improve your mental game. It describes the roles of Self 1 and Self 2 in the learning process and how to improve letting Self 2 free.'
		),
		new Book(
			'The Machinery of Life',
			new Date('June 19, 2024'),
			4,
			'Awesome book about the biology of our bodies. The author explains how different proteins work together to keep us up and running.'
		),
		new Book(
			'The Subtle Art of Not Giving a F*ck',
			new Date('June 23, 2024'),
			5,
			'A book about the art of not giving a fuck about too many things. The author talks about the importance of prioritizing the right things and being able to handle stress. The book is a great read and might help you become a happier person.'
		),
	];
}
