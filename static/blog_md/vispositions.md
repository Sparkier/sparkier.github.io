Today, I'm releasing a new website called [visPositions](https://vispositions.com). It's a very simple collection of job postings for VIS and HCI researchers. In the following, I will explain why I am doing this and how this website is going to work.

## Why visPositions?

There are many job boards and there are also many postings on other channels, such as LinkedIn, X, Slack channels, and mailing lists. However, I think all of these channels have some issues. I'm not saying that this website does not, for now this is just an experiment that I wanted to do more of in 2025, but here are some of the issues I see.

### Unspecific Searches

If we're not talking about mailing lists or online communities specifically targeting VIS and HCI researchers, search results just don't work for me. If I'm searching websites like Indeed or LinkedIn for a job that I like, I'm often swamped with results that are not relevant to me. In all of this clutter, it can be hard to even find a job that is relevant to me at all. This is why I like more specific online communities, such as mailing lists or conference job boards. However, these have their own issues that I'll get into in the following.

### Inequality

My main reason for doing this is that a lot of the job postings I see are not visible to everyone. For example, I'm on some mailing lists and in some Slack channels, but I only got wind of them at the very end or after finishing my PhD. I'm sure there are more of these channels that I've never heard of. At the same time, other forms of job postings are pay to win (either for the job seeker or the company), such as LinkedIn on dedicated online job marketplaces. This is a problem because it means that a lot of people are not aware of these opportunities and it's much harder for some people to find these job postings than others. However, this is not just a problem for job seekers, but also for companies that want to hire. It's always better to have a larger pool of candidates to find the best person for the job. I hope that a website that is free for everyone and open to the public will help to make these opportunities more visible and accessible to everyone.

### Insecurity

Why are most of the community forums for something like this not open? I think the main reason here is that people are afraid of spam and abuse. However, I think this is a problem that can be solved with a little bit of effort. It's not that hard to make sure a posting is sincere and that's what I'm trying to do with visPositions.

## How does visPositions work?

visPositions is a simple website that allows anyone to post job postings for VIS and HCI researchers. Every post is initially in an _unvetted_ state, where it is not visible by default. I (and here I'm definitely open to help) will check every post then set the _vetted_ flag (or delete it). Obviously, this means you'll have to trust me and wait for my vetting, if you have better ideas I'm all ears, but I think this is an ok start.

I guarantee that I will be objective here and only reject posts for two reasons:

1. The post is not in the VIS or HCI field at all
2. The post is spammy or inappropriate

I will also never take any form of bribe or payment for job postings.

I'm not yet sure whether _unvetted_ posts will not be visible at all or just not visible by default. I also want to make this system more democratic but I'm starting this as a one-person project, so this is all I can do for now.

visPositions does not collect any data from you, it's totally anonymous (except if you post a job yourself, then I'll store your email address). All it does is show you job postings alongside keywords, some nice filters, and a link to wherever the author of the posting wants to send you if you're interested.

To get the ball rolling, I'll cross-post all the job postings I know of from the VIS and HCI community. If you know of any job postings that are not listed here, please let me know, or even better, post them yourself!

## Technical Details

visPositions is implemented in TypeScript and SvelteKit. It's hosted on Vercel and uses Supabase for the database. The code is [open source and available on GitHub](https://github.com/Sparkier/vispositions). I will be keeping this website going for at least the end of 2025 (this is how much time and money I'm willing to invest without any signal of success). After that, I'll keep things going if there is enough interest and support from the community. I do not plan to make any moeny from this website and this will always be free with community service as it's main goal.

<small><a id="note1" href="#ref1">[1]</a> <a>https://road-safety.transport.ec.europa.eu/document/download/adbd19af-b384-4fb7-a7dc-2ae199aa8453_en?filename=erso-country-overview-2023-germany_0.pdf</a></small>
<small><a id="note1" href="#ref1">[1]</a> <a>https://www.hertie-school.org/en/news/detail/content/economists-from-passau-and-berlin-speed-limits-in-germany-improve-health-outcomes-and-protect-our-climate</a></small>
