Today, I'm releasing a new website called [visPositions](https://vispositions.com). It's a very simple collection of job postings for VIS and HCI researchers. In the following, I will explain why I am doing this and how this website is going to work.

If you just want to get alerts for new positions in the field, [subscribe](https://vispositions.com/newsletter/subscribe) to get email alerts. If you're interested in why I've done this in the first place, here we go.

## Why visPositions?

There are many job boards and there are also many postings on other channels, such as LinkedIn, X, Slack channels, and mailing lists. However, I think all of these channels have some issues. I'm not saying that this website does not, for now this is just one of these experiments that I wanted to do more of in 2025, but here are some of the issues I see.

### Unspecific Searches

If we're not talking about mailing lists or online communities specifically targeting VIS and HCI researchers, search results just don't work for me. If I'm searching websites like Indeed or LinkedIn for positions in visualization, I'm often swamped with results that are not relevant to me. In all of this clutter, it can be hard to even find a job that is relevant to me at all. At the same time, I have the impression that lots of the jobs in this domain are not even posted on these platforms, especially in academia. This is why I like more specific online communities, such as mailing lists or conference job boards. However, these have their own issues...

### Inequality

My main reason for doing this is that a lot of the job postings I see are not visible to everyone. For example, I'm on some mailing lists and in some Slack channels, but I only got wind of them at the very end or after finishing my PhD. I'm sure there are more of these channels that I've never heard of. At the same time, other forms of job postings are pay to win (either for the job seeker or the company), such as LinkedIn on dedicated online job marketplaces. This is a problem because it means that a lot of people are not aware of these opportunities and it's much harder for some people to find these job postings than others. This is not even just a problem for job seekers, but also for companies that want to hire. It's always better to have a larger pool of candidates to find the best person for the job. I think that a platform that is free and open for everyone will help make these opportunities more visible and accessible.

### Insecurity

Why are most of the community forums for something like this not open? I think the main reason here is that people are afraid of spam and abuse. However, this is a problem that can be solved with relatively low effort. It's not that hard to make sure a posting is sincere and that's what I'm trying to do with visPositions.

## How does visPositions work?

visPositions is a simple website that allows anyone to post job postings for VIS and HCI researchers. Every post is initially in an _unvetted_ state, where it is not visible by default. I (or anyone interested in helping with this) will check every post before setting the _vetted_ flag. Obviously, this means you'll have to trust me and wait for my vetting (I get an email as soon as you post and try to vet as fast as possible), if you have better ideas I'm all ears, but I think this is an ok start.

I guarantee that I will be objective here and only reject posts for two reasons:

1. The post is not in the VIS or HCI field at all
2. The post is spam or inappropriate for some reason

I will also never take any form of payment for job postings. I think the size of this community is not at a point where I have to pay a lot to keep this running. If that changes, I'll search for a solution that does not compromise my point about inequality even slightly. I do not plan to make any moeny from this website and this will always be free with community service as it's main goal.

I'm not yet sure whether _unvetted_ posts will not be visible at all or just not visible by default. I also want to make the vetting system more democratic but I'm starting this as a one-person project, so this is all I can do for now.

visPositions does not collect any data from you, it's totally anonymous (except if you post a job yourself or subscribe to the newsletter, then I'll need your email address). All it does is show you job postings alongside keywords, some nice filters, and a link to wherever the author of the posting wants to send you if you're interested.

To get the ball rolling, I'll cross-post all the job postings I know of from the VIS and HCI community. However, this will work much better (likely at all) only if other people also post positions here.

## Technical Details

visPositions is implemented in TypeScript and SvelteKit. It's hosted on Vercel and uses Supabase for the database. Resend does all the emailing. The code is [open source and available on GitHub](https://github.com/Sparkier/vispositions). I will be keeping this website going until at least the end of 2025 (this is how much time and money I'm willing to invest without any signal of success). After that, I'll keep things going if there is enough interest and support from the community.
