As we enter 2025, I want to reflect on the main themes of Human-Computer Interaction in the field of AI we saw in 2024 and explore what I believe will be the key focus areas for the coming year. This very personal and opinionated piece is based on my observations and experiences in the field, and is mainly designed to force me to reflect on the past year and make bets for this coming one, but maybe there is some value for researchers, practitioners, and anyone interested in how we design human interfaces for AI systems.

## 2024 in Review

2024 has been the year of HCI research on LLMs since they had such an outsized impact on the field. In the LLM domain, there has been a lot of focus on evaluation (as evidenced by Greg Brockman's tweet<sup><a id="ref1" href="#note1">[1]</a></sup>). This has also been an area where I've personally been doing a lot of work with _Zeno_<sup><a id="ref2" href="#note2">[2]</a></sup> and I really liked _LLM Comparator_ from the PAIR team at Google<sup><a id="ref3" href="#note3">[3]</a></sup>. Another area that has been blessed with a lot of great HCI research has been prompt engineering. Two of the _many_ works that I found really inspiring here were Jay Wang's _Wordflow_<sup><a id="ref4" href="#note4">[4]</a></sup> and Ian Arawjo's _ChainForge_<sup><a id="ref5" href="#note5">[5]</a></sup>. There is also one industry project on prompt engineering by my friends at _Hamming_ that I want to highlight if you haven't seen it yet<sup><a id="ref6" href="#note6">[6]</a></sup>.

## Focal Points for 2025

As we look ahead to 2025, I want to highlight three key focal points that I believe will be important for both HCI research and industry products: Agents, Adoption, and Application Domains. While there are certainly other important topics in HCI for AI, these _3 As_ represent areas where I expect to see the most significant developments in terms of publications, real-world implementations, and overall impact on how humans interact with AI systems.

### Agents - The Elephant in the Room

If you've been following AI developments lately, you've probably noticed that agents are having their moment in the spotlight. They've matured significantly and are now working effectively across many domains - from helping with complex coding tasks, such as _OpenHands_<sup><a id="ref7" href="#note7">[7]</a></sup> to assisting with daily productivity workflows, such as what my friends at _QConcierge_ are building<sup><a id="ref8" href="#note8">[8]</a></sup>. However, while these systems work, they're still too difficult to debug and make work for many users. Developers who are trying to build with agents still work mostly with tools that feel like we're still in the early days of software development - before IDEs, before debugging tools, before we had established best practices. Building agents requires deep expertise, debugging them and understanding what's happening under the hood feels like searching for a needle in a haystack.

This is exactly where HCI research needs to step in. We need to focus on creating better developer experiences. I'm particularly excited about four key areas where I think we'll see major developments:

1. We desperately need tools that make agent development more accessible. Right now, building agents feels like writing assembly code - it works, but it's far too complex for most developers. We need progress like what we've seen in the prompt engineering space mentioned above.

2. Debugging needs to be greatly improved. When an agent fails, developers often have no idea why. We need sophisticated debugging tools that help developers track down issues quickly and effectively.

3. We need more interactive interaction paradigms. Both users and developers need to understand not just what agents are doing, but why they're making specific decisions, and be able to take over the agent's control seamlessly. There is a bunch of research around this in the domain of autonomous driving<sup><a id="ref9" href="#note9">[9]</a></sup>, and I think we need similar work in the agentic AI space.

### Adoption - Why is not everyone using AI?

The adoption of AI has reached a critical inflection point. While the technology has matured to offer valuable applications across numerous domains, there remains a stark divide in user adoption. Tech-savvy early adopters have enthusiastically integrated AI into their workflows, but many everyday users are still in the early stages of understanding its potential.

Through casual conversations — with _my parents, non-tech friends, and strangers_ — I've observed a common pattern: people have had their initial AI experiences but struggle to translate that into meaningful ongoing usage. This represents a fundamental HCI challenge. The technology exists and works, but we need better interfaces and interaction patterns to help users understand how to leverage it effectively. This challenge presents not just an academic research opportunity, but also a massive market opportunity for both startups and established companies.

I believe 2025 could bring a **cursor moment** for less tech-savvy users - the development of interfaces and tools that make AI interaction as natural and ubiquitous as using a mouse pointer. The first generation of these tools will likely focus on universally relatable use cases such as: travel planning, general ideation, and emotionally or socially complex tasks.

While we're seeing early adoption in these areas, there's still an enormous untapped potential. In my opinion, the gap between current users and potential beneficiaries represents one of the most significant opportunities in the AI space.

### Application Domains - Can we clear up the misconceptions?

The application of AI across industries has revealed a significant challenge: while the technology is becoming ubiquitous, there remains a substantial gap between its actual capabilities and how domain experts understand them. This disconnect manifests in various misconceptions and prejudices about AI systems, presenting both challenges and opportunities for the HCI community.

A critical focus area is clarifying what AI can be in domains like biology, healthcare, education, and many more. Currently, AI is often reduced to a buzzword rather than being understood as a tool with specific capabilities and limitations. The HCI community has a unique opportunity to bridge this understanding gap through thoughtful interface design and clear communication strategies.

Through my work with domain experts, I've encountered several recurring misconceptions that highlight this disconnect:

- _"Won't the model learn from my data during inference and potentially leak information?"_
- _"I need to see a confidence score to trust the model's output"_
- _"Can you show me exactly what data was used to train this model?"_
- _"I have 5 examples - can we train a new model on just these?"_
- _"We revolutionized our process to be AI-based?"_ (When AI only handles a very specific and small subtask)

While we've made significant progress in addressing these concerns for AI practitioners, the next frontier lies in helping domain experts understand how AI can serve their specific needs. This extends beyond merely correcting misconceptions - we need to develop interfaces and tools that make AI's capabilities and limitations inherently transparent and intuitive to use for experts across all fields.

## Runner Ups

The topics discussed above represent what I believe will get most attention in HCI research and industry applications in 2025. Below, I'll touch on some emerging topics that, while fascinating, may not yet be ripe for extensive HCI research. This lag is natural - HCI typically follows AI research, as it is easier to meaningfully study human interaction with working systems.

### Vision and 3D

The intersection of AI with vision and 3D environments presents fascinating challenges for HCI research. While these areas are still emerging, they raise important questions about interaction design and user experience. Two areas that I'm particularly excited about are Gaming and Interactive Entertainment, and 3D Environments and Spatial Computing.

AI is revolutionizing how we think about gaming experiences. Key areas here are designing intuitive interfaces for players to interact with AI-powered NPCs and generated worlds, creating balanced gameplay mechanics that leverage AI without overwhelming players, and developing tools for game designers to easily implement and tune AI behaviors.

As 3D environments become more prevalent, we need to consider natural interaction patterns for manipulating AI-generated 3D content, ways to integrate our learnings on agentic systems into 3D environments, and tools for creators to leverage AI in 3D content creation pipelines.

While these areas show immense promise, they're still in early stages. The technical foundations are being laid now, setting the stage for rich HCI research opportunities in the coming years. AI in gaming has just started to really take off, and I still feel like we're not sure about the hardware and environments that will be used for 3D content.

### Robotics

Robots will probably become more prevalent in our daily lives - from manufacturing floors to healthcare settings to our homes. Thus, designing intuitive and safe interaction patterns becomes crucial. Since this is an area that directly affects our physical world, we will need to design safety mechanisms, intuitive control interfaces, think about how to integrate such systems into our social context, and build trust with users. There is also a unique aspect to potential developer tools including privacy implications that we will have to think about.

While the challenge here lies not just in making robots functional, but in making them approachable and trustworthy partners in human environments. This requires careful consideration of both physical and psychological safety aspects in the design process. However, before HCI research in this area really becomes one of the most crucial parts in the space of physical AI, there is some foundational robotics work that needs to be done first.

## Conclusion

These are just my thoughts on what I believe will be the most interesting topics in HCI for AI in 2025. If you're already working in these areas, that's fantastic - you'll likely find yourself in an active and engaging field. If you're exploring different directions, that's equally exciting - you might be ahead of the curve or on the verge of discovering something entirely new (or prove me wrong).

I've undoubtedly missed important topics and trends, and I'm pretty sure that some of my predictions will not pan out as expected. I'd love to hear your thoughts and perspectives on where you think HCI for AI is headed in 2025. What areas do you think will emerge as crucial? What challenges do you foresee?

<small><a id="note1" href="#ref1">[1]</a> <a>https://x.com/gdb/status/1733553161884127435</a></small>
<small><a id="note2" href="#ref2">[2]</a> <a>https://zenoml.com</a></small>
<small><a id="note3" href="#ref3">[3]</a> <a>https://github.com/PAIR-code/llm-comparator</a></small>
<small><a id="note4" href="#ref4">[4]</a> <a>https://zijie.wang/papers/wordflow/</a></small>
<small><a id="note5" href="#ref5">[5]</a> <a>https://www.chainforge.ai</a></small>
<small><a id="note6" href="#ref6">[6]</a> <a>https://app.hamming.ai/prompt-optimizer</a></small>
<small><a id="note7" href="#ref7">[7]</a> <a>https://github.com/All-Hands-AI/OpenHands</a></small>
<small><a id="note8" href="#ref8">[8]</a> <a>https://qconcierge.ai</a></small>
<small><a id="note9" href="#ref9">[9]</a> <a>https://www.mdpi.com/2079-9292/9/12/2087</a></small>
