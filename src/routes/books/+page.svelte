<script lang="ts">
	import { getBooks } from '$lib/helpers/bookProvider';
</script>

<div class="flex flex-col gap-8">
	<p class="text-justify">
		These are some of the books I have read recently. I also add a very personal comment and rating
		to each book. If you want to know more about a book or have opinions about a book on this list,
		always down to discuss!
	</p>
	{#each getBooks().sort((a, b) => (a.date < b.date ? 1 : -1)) as book}
		<div class="flex w-full items-start gap-4">
			<div class="relative flex w-full flex-col">
				<h3>{book.title}</h3>
				<p class="absolute right-0 top-0">
					{book.date.toDateString()}
				</p>
				<p class="text-justify">
					{book.comment}
				</p>
				<p class="text-justify">
					{'📚'.repeat(book.rating)}
				</p>
			</div>
		</div>
	{/each}
</div>
