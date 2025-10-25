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
		new Book(
			'The Mountaine in the Sea',
			new Date('August 31, 2024'),
			4,
			'Great fiction book about humanity and other smart species. The philosophical questions that the book raises are interesting and thought-provoking, however, the story was a bit too out of this world.'
		),
		new Book(
			'Give and Take',
			new Date('November 20, 2024'),
			2,
			'Interesting book about the psychology of giving and taking. The author explains how to give and take in a way that is beneficial for everyone. However, this book could have probably been a blog post.'
		),
		new Book(
			'Lord of the Flies',
			new Date('January 1, 2025'),
			3,
			'A classic book about the dark side of human nature. The book is a great read and raises interesting questions about human nature, the score mostly reflects that it is somewhat hard to read especially as a non-native English speaker.'
		),
		new Book(
			'Catch 22',
			new Date('April 5, 2025'),
			3,
			'Very fun book about the absurdity of war and the military. The way it is written and the weird story can make it hard to read as a non-native English speaker.'
		),
		new Book(
			'Snow Crash',
			new Date('July 19, 2025'),
			4,
			'Great sci-fi book about a somewhat dystopian future of human society. Sometimes a little too out of this world, but still a great read.'
		),
		new Book(
			'Children of Time',
			new Date('October 23, 2025'),
			4,
			'A philosophical sci-fi book about the history of life on Earth and the future of humanity. It has a lot of interesting ideas and concepts, but can sometimes be a bit too designed to work in a particular way.'
		)
	];
}
