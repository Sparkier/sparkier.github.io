<script>
	import Icon from '$lib/components/Icon.svelte';
	import LinkElement from '$lib/components/LinkElement.svelte';
	import { getReviews } from '$lib/helpers/reviewProvider';
	import { getTalks } from '$lib/helpers/talkProvider';
	import { getLectures } from '$lib/helpers/teachingProvider';
	import { getWork } from '$lib/helpers/workProvider';
</script>

<div class="flex flex-col gap-8">
	<p class="text-justify">
		Deep learning might currently be one of the few technologies that has a great transformative
		potential for us all. To advance deep learning, I think one of the most important aspects is to
		understand the technology very well. Such an understanding should be accessible to as many
		people as possible. Thus, I am excited whenever I have the chance to work on something that
		fosters this understanding or makes it available to more users.
	</p>
	<div class="flex flex-col gap-4">
		<h1>Work</h1>
		{#each getWork() as employment}
			<div class="workplace-container">
				<Icon icon={employment.icon} plain />
				<h3>{employment.title} ({employment.timeframe})</h3>
				<p class="text-justify">{employment.abstract}</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		<h1>Talks</h1>
		{#each getTalks() as talk}
			<div class="talk-container">
				<h3>
					{talk.title}
				</h3>
				<div class="flex gap-2">
					<p>
						{talk.venue}, ({talk.date.toDateString()})
					</p>
					<div class="flex gap-1">
						{#each talk.links as link}
							<LinkElement href={link.link} blank>
								<Icon icon={link.icon} />
							</LinkElement>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		<h1>Teaching</h1>
		{#each getLectures() as lecture}
			<div class="flex flex-col">
				<h3>{lecture.title} ({lecture.timeframe})</h3>
				<p>
					{lecture.abstract}
				</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		<h1>Reviewing and Service</h1>
		<div class="flex flex-col gap-2">
			{#each getReviews() as s}
				<p>{s.venue} ({s.years})</p>
			{/each}
		</div>
	</div>
</div>
