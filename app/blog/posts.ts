export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "why_ai_pilots_never_reach_production",
    title: "Why Most AI Pilots Never Make It to Production",
    date: "November 14, 2023",
    category: "Strategy",
    readTime: "5 min read",
    excerpt:
      "Every firm had a ChatGPT pilot running somewhere. Most of them would never ship. The problem was not the technology.",
    content: [
      "The enterprise AI landscape in late 2023 looked promising from the outside. Every firm had a pilot running somewhere. Most of them would never ship.",
      "The problem was not the technology. GPT-4 was capable enough to deliver real value in a dozen obvious use cases. The problem was how organizations were approaching the work. Pilots were being run by whoever was most enthusiastic, not whoever owned the process being automated. Success criteria were vague. The path from proof of concept to production was undefined before the pilot started.",
      "The result was predictable. Pilots produced impressive demos, generated internal excitement, and then stalled when it came time to deploy. The integration work was harder than expected. The legal and compliance review took longer than anyone budgeted. The original champion moved to a different role. The initiative quietly died.",
      "What makes a pilot different from a project is the word eventual. A pilot is a test. A project has a shipping date. Organizations that were actually getting AI into production in 2023 were treating it as a project from day one. They defined the production environment before they wrote the first line of integration code. They identified the stakeholders who could block deployment and included them from the start.",
      "The other thing that separated successful deployments was choosing the right first problem. Not the most exciting problem. Not the one most likely to impress the CEO. The one with the clearest ROI, the best-defined inputs and outputs, and the least regulatory complexity. Boring problems deployed. Interesting ones languished.",
      "If your organization is sitting on a successful pilot right now, ask one question before the end of the quarter: what, specifically, would have to be true for this to be in production in sixty days? If you cannot answer that clearly, the pilot is not actually successful. It is just not yet failed.",
    ],
  },
  {
    slug: "automation_vs_integration",
    title: "The Difference Between AI Automation and AI Integration",
    date: "January 22, 2024",
    category: "Operations",
    readTime: "4 min read",
    excerpt:
      "These two terms are being used interchangeably. They describe different things. The confusion is causing organizations to build the wrong systems.",
    content: [
      "These two terms are being used interchangeably and they describe different things. The confusion is causing organizations to set wrong expectations, build wrong systems, and end up with wrong outcomes.",
      "AI automation means using AI to perform a task that a human was previously doing. A person was reading invoices and extracting line items. Now a model does it. The human is removed from the process or redeployed. The workflow itself does not change materially. You have replaced a step.",
      "AI integration means embedding AI into a workflow in a way that changes how the workflow operates. The AI is not replacing a discrete task. It is changing the information flow, the decision logic, or the exception handling across the entire process. The system becomes different, not just faster.",
      "Neither approach is better. They solve different problems. Automation is appropriate when the task is well-defined, repetitive, and the value lies in volume and consistency. Integration is appropriate when the value lies in improving a workflow that is currently limited by information latency, human bottlenecks, or inconsistent decision-making at scale.",
      "The practical mistake organizations make is treating an integration problem like an automation problem. They automate a step inside a broken workflow and are surprised when the results do not move the business metric they cared about. The AI is working. The workflow is still broken.",
      "Before you decide how to use AI in a given process, spend time understanding what is actually constraining the process. If the constraint is that a task takes too long, automation may be the answer. If the constraint is that the right information is not available at the right decision point, that is an integration problem. Solving it with automation will not help.",
    ],
  },
  {
    slug: "what_rag_actually_solves",
    title: "What RAG Actually Solves",
    date: "March 8, 2024",
    category: "Technology",
    readTime: "5 min read",
    excerpt:
      "Retrieval-augmented generation had become the dominant architectural pattern for enterprise AI. Most of the discourse around it was either too technical or too vague.",
    content: [
      "Retrieval-augmented generation had become the dominant architectural pattern for enterprise AI by early 2024, and the volume of discourse around it had grown proportionally. Most of that discourse was either too technical for decision-makers or too vague to be useful. Here is what it actually does.",
      "Language models are trained on static datasets. When you ask a model a question about your company's internal documentation, current pricing, or last quarter's operational data, the model does not have that information. It may hallucinate an answer, or it may appropriately decline. Either way, it cannot be accurate about information it has never seen.",
      "RAG solves this by retrieving relevant documents from your actual data sources at query time and including them in the model's context. The model is no longer guessing from training data. It is reasoning over information you have provided to it directly. The result is a system that can accurately answer questions about your specific data without requiring you to fine-tune or retrain a model, which is expensive and time-consuming.",
      "What RAG does not solve is bad data. If your internal documents are inconsistent, outdated, or poorly structured, a RAG system will faithfully surface that inconsistency. This is actually useful information, but it is not the information teams expect. The most common complaint about RAG systems after deployment is that the answers are unreliable. In most cases, the underlying issue is not the retrieval or the generation. It is the quality of the data being retrieved.",
      "RAG also does not make a model smarter or more capable. It extends what the model can access, not what it can do. Understanding this distinction matters when scoping what a RAG-based system can realistically accomplish.",
      "The organizations getting the most value from RAG in 2024 were treating data quality as a prerequisite rather than a follow-on project.",
    ],
  },
  {
    slug: "operations_should_lead_ai",
    title: "Why Your Operations Team Should Own Your AI Initiative",
    date: "June 3, 2024",
    category: "Strategy",
    readTime: "4 min read",
    excerpt:
      "The default assumption is that AI is a technology project, so it belongs to the technology team. This assumption is responsible for a large share of stalled initiatives.",
    content: [
      "The default assumption in most organizations is that AI is a technology project, so it belongs to the technology team. This assumption is responsible for a large share of stalled AI initiatives.",
      "Technology teams are good at building infrastructure, managing systems, and maintaining stability. They are not, as a rule, domain experts in the operational processes that AI is meant to improve. They do not spend their days inside the accounts payable workflow, the client onboarding process, or the logistics exception queue. They can build a system that technically functions. They cannot independently determine whether it is solving the right problem.",
      "Operations leaders have the inverse profile. They understand the process, the constraints, the edge cases, and the human dynamics around the work. They know which parts of their workflow are genuinely painful and which are fine. They know which metrics actually matter to the business and which are reported because someone built a dashboard years ago.",
      "When operations leads an AI initiative, two things happen. First, the problem definition gets sharper. The system gets built to address the real constraint, not the most technically tractable one. Second, adoption goes up. Teams are more likely to use systems that were built by people who understand their work than systems handed down from a central technology function.",
      "This does not mean technology is irrelevant. The integration work, the infrastructure, the security review, all of that still requires technical expertise. What it means is that the decision about what to build, and the judgment about whether it is working, should rest with the people closest to the process.",
      "The organizations with the most successful AI deployments in 2024 almost universally had an operations leader as the primary sponsor, not a CTO.",
    ],
  },
  {
    slug: "measuring_ai_roi",
    title: "How to Measure AI ROI Without the Noise",
    date: "August 19, 2024",
    category: "Operations",
    readTime: "5 min read",
    excerpt:
      "AI ROI discussions tend to go one of two ways. Either the numbers are inflated to justify the investment, or they are so hedged they are useless for decision-making.",
    content: [
      "AI ROI discussions tend to go one of two ways. Either the numbers are inflated to justify the investment, or they are so hedged and qualified that they are useless for decision-making. Neither version helps you run your business better.",
      "The starting point is identifying a metric you already track that the initiative is designed to move. Not a new metric created to make the project look good. An existing one. Time to process an invoice. Error rate on a specific workflow. Volume of exceptions requiring human review. If you cannot connect the initiative directly to something already on your operational dashboard, the problem definition needs more work before deployment begins.",
      "The second step is establishing a clean baseline. What does the current state look like, measured consistently, before the AI system is introduced? This sounds obvious but it is skipped constantly. Teams deploy, then try to reconstruct the baseline from memory or inconsistent historical records, then argue about whether the numbers are comparable. Get the baseline first.",
      "The third step is defining what constitutes success before go-live, not after. When success criteria are defined retroactively, they tend to migrate toward whatever the system actually achieved. When they are defined in advance, you get honest data about whether the initiative worked.",
      "The final step is separating AI contribution from other variables. If the initiative launches at the same time as a process change, a team restructure, or a seasonal shift in volume, the measurement is contaminated. Isolate the variable you are trying to test.",
      "None of this is complicated. It is discipline. The organizations that apply it consistently end up with a clear picture of what their AI investments are actually returning.",
    ],
  },
  {
    slug: "cost_of_doing_nothing",
    title: "The Hidden Cost of Doing Nothing",
    date: "October 7, 2024",
    category: "Strategy",
    readTime: "4 min read",
    excerpt:
      "There is a version of prudence that looks like caution but is actually delay. The cost of doing nothing is not zero. It is accruing.",
    content: [
      "There is a version of prudence that looks like caution but is actually delay. In the current environment, it is increasingly common in executive teams that are waiting for the technology to mature before committing to an AI strategy.",
      "The logic sounds reasonable. The technology is moving quickly. Decisions made today might be obsolete in eighteen months. Better to wait until things settle. The problem is that this calculus ignores what is happening on the other side of the ledger. The cost of doing nothing is not zero. It is accruing.",
      "Competitors who deployed AI into their operations twelve months ago are running leaner. Their manual process costs are lower. Their exception handling is faster. Their teams are spending more time on work that requires judgment and less on work that requires endurance. The gap between organizations that have deployed and those that have not is not staying static while the cautious ones wait. It is widening.",
      "There is also a talent dimension. The operations professionals who want to work at the leading edge of their field are increasingly looking at an organization's AI posture as a signal about its future. Not because AI is fashionable, but because it is a reasonable proxy for whether the organization is willing to invest in making their jobs better.",
      "The technology has not settled, and it will not settle on a timeline that rewards waiting. What has emerged in 2024 is a reasonably clear picture of what enterprise AI can do reliably, what it cannot, and what it costs to deploy. That is enough information to make a decision.",
      "Organizations that are still waiting for more certainty are not being careful. They are being expensive.",
    ],
  },
  {
    slug: "what_2024_taught_us",
    title: "What 2024 Taught Us About Enterprise AI",
    date: "December 2, 2024",
    category: "Strategy",
    readTime: "5 min read",
    excerpt:
      "Twelve months of enterprise AI deployments produced a clearer picture of what works and what does not. Some of the lessons were expected. Several were not.",
    content: [
      "Twelve months of enterprise AI deployments produced a clearer picture of what works and what does not. Some of the lessons were expected. Several were not.",
      "The expected lesson: narrowly scoped AI applications outperform broad ones. Organizations that deployed AI against a specific, well-defined process problem got results. Organizations that deployed AI platforms expecting business units to self-organize around them largely did not.",
      "The first unexpected lesson: the integration complexity is almost always larger than the AI complexity. Building the model or configuring the application is rarely where projects stall. What stalls them is connecting to the right data sources, navigating legacy system constraints, and managing the organizational handoffs between teams. The AI piece is often the smallest technical challenge in the room.",
      "The second unexpected lesson: adoption is a deployment problem, not a training problem. Teams that had their AI tools introduced through a structured rollout with clear ownership used them. Teams that received access to the same tools through a self-serve portal and an email announcement largely did not. The technology was identical. The implementation was not.",
      "The third lesson, which may be the most operationally important: the ROI in most deployments accrued faster than teams expected once the system was in production, but the time to reach production was longer than planned. Organizations consistently underestimated integration time and overestimated how quickly they would have clean enough data to get the system working well.",
      "The implication for 2025 planning is straightforward. Add six to eight weeks to your integration timeline estimate. Invest in data quality before you build. Start narrower than feels right.",
    ],
  },
  {
    slug: "agentic_ai_in_operations",
    title: "Agentic AI in Operations: What Is Real Right Now",
    date: "February 11, 2025",
    category: "Technology",
    readTime: "5 min read",
    excerpt:
      "Agentic AI had become one of the most discussed topics in enterprise technology. It had also become one of the most overhyped. Here is the honest picture.",
    content: [
      "Agentic AI, systems that can plan, take actions, and operate with minimal human direction over extended tasks, had become one of the most discussed topics in enterprise technology by early 2025. It had also become one of the most overhyped.",
      "The honest picture of where agentic AI sits in enterprise operations right now is more useful than the promotional version.",
      "Agentic systems work well in environments with well-defined action spaces, reliable APIs, and clear success criteria. If you have a process where the steps are predictable, the tools the agent needs are stable, and the definition of a correct outcome is unambiguous, agentic architectures can deliver significant automation depth. Research agents that compile and synthesize information from structured sources, triage agents that classify and route incoming requests, monitoring agents that detect anomalies and initiate standard responses. These are real and working.",
      "Agentic systems struggle in environments with high ambiguity, unreliable data, or consequential edge cases requiring judgment. Having an agent autonomously negotiate a contract, manage a client escalation, or make a procurement decision without human review is not a deployment pattern that enterprise risk functions are approving, and for good reason. The error modes are non-trivial and the consequences are real.",
      "The practical advice for operations leaders evaluating agentic AI right now is to treat it as a spectrum, not a binary. You do not have to decide whether to deploy fully autonomous agents. You can deploy agents with human-in-the-loop checkpoints at specific decision points, reducing manual overhead while maintaining accountability for the moments that matter.",
      "That middle ground is where most of the deployments actually delivering value are operating today.",
    ],
  },
  {
    slug: "middle_manager_and_ai",
    title: "The Middle Manager and AI: The Conversation No One Is Having",
    date: "April 3, 2025",
    category: "Operations",
    readTime: "4 min read",
    excerpt:
      "The executive conversation about AI is happening. The frontline conversation is happening. The one about middle managers is not, and it should be.",
    content: [
      "The executive conversation about AI is happening. The frontline worker conversation about AI is happening. The conversation that is not happening with nearly enough seriousness is the one about middle managers.",
      "Middle managers are the people through whom AI initiatives either succeed or quietly fail. They control how work gets organized, which tools their teams actually use, and whether new systems are treated as genuine improvements or additional overhead to work around. When an AI deployment struggles, the root cause is often a manager who was not included in the design process and has no particular reason to champion a system they did not ask for.",
      "This is not a malicious dynamic. It is a structural one. Middle managers are accountable for near-term team performance. New AI systems, even good ones, introduce short-term friction. There is a period of adjustment, a learning curve, a tolerance for the system getting things slightly wrong while it is calibrated. That friction cost is borne by the manager. The long-term benefit often accrues to someone else's budget line.",
      "The organizations navigating this well are doing a few specific things. They are including managers in problem definition, not just deployment. They are making the ROI of the initiative visible at the team level, not just the organizational level. And they are treating the manager's feedback about the system in production as a first-class input, not noise to be managed.",
      "The AI system that looks good in a demo and fails in practice almost always has a middle manager story behind it. Find that story before you ship.",
    ],
  },
  {
    slug: "document_intelligence_in_the_enterprise",
    title: "Document Intelligence in the Enterprise: Beyond Basic OCR",
    date: "June 17, 2025",
    category: "Technology",
    readTime: "5 min read",
    excerpt:
      "For years, document intelligence meant optical character recognition. The current generation is a different category entirely, and the enterprise use cases are finally clear.",
    content: [
      "For years, document intelligence in the enterprise meant optical character recognition. Scan a document, extract text, push it downstream. It was better than manual entry and worse than everyone pretended.",
      "The current generation of document intelligence is a different category. The distinction is not just in accuracy, though accuracy is substantially better. It is in what the system understands about the document and what it can do with that understanding.",
      "Legacy OCR extracts characters. Modern document intelligence understands structure, context, and meaning. It can read a contract and identify not just the text of a clause but what type of clause it is, whether it deviates from a standard template, and what the downstream implications of that deviation are. It can process a set of financial statements and extract not just numbers but relationships between numbers. It can handle documents that were never designed for machine reading, ones with inconsistent formatting, handwritten annotations, or mixed languages, and still produce structured, reliable output.",
      "The enterprise use cases generating the clearest ROI right now are in contract analysis, invoice processing, regulatory filing review, and client onboarding documentation. What these have in common is high document volume, high cost of errors, and workflows that have historically required experienced staff to process documents too complex for traditional extraction tools.",
      "The organizations deploying document intelligence effectively are the ones who resisted the temptation to boil the ocean. They identified one document type, one workflow, one clear success metric, and built from there. The technology is capable of much more. Starting narrow is still the right approach.",
    ],
  },
  {
    slug: "why_ai_projects_take_too_long",
    title: "Why AI Projects Take Too Long",
    date: "August 5, 2025",
    category: "Operations",
    readTime: "5 min read",
    excerpt:
      "The average enterprise AI project takes substantially longer to deliver than the initial estimate. This is consistent across industries. It is not primarily a technology problem.",
    content: [
      "The average enterprise AI project takes substantially longer to deliver than the initial estimate. This is consistent across company sizes, industries, and AI use cases. It is not primarily a technology problem, which is why better technology has not solved it.",
      "The first cause is scope expansion during integration. Projects are scoped against the AI component and underscoped against the surrounding system work. When integration begins and the actual complexity of connecting to existing infrastructure becomes clear, the timeline expands. This happens on almost every project. It is predictable and it is almost never planned for.",
      "The second cause is stakeholder sequencing. Projects stall when the wrong people are involved too late. Legal, compliance, IT security, and data governance all have legitimate review requirements that take time. When these reviews are initiated at the end of a project rather than at the beginning, they introduce delays that could have been parallelized with earlier work. Treating these reviews as a final gate rather than a concurrent workstream adds weeks to every deployment.",
      "The third cause is data readiness assumptions. Teams begin projects with an optimistic view of how clean and accessible their data is. The reality is almost always more complex. Data that looks usable during scoping reveals quality problems, access restrictions, or structural inconsistencies when the AI system actually tries to work with it.",
      "The fix for all three is the same: invest more time in the front end of the project. A thorough integration assessment, early stakeholder engagement, and a realistic data quality audit before development begins will not eliminate delays. They will reduce them substantially.",
      "The projects that deliver on time are almost uniformly the ones that spent more time planning before they started building.",
    ],
  },
  {
    slug: "enterprise_ai_stack_2025",
    title: "The Enterprise AI Stack: What Actually Matters",
    date: "October 14, 2025",
    category: "Technology",
    readTime: "5 min read",
    excerpt:
      "Two years of enterprise AI deployment have produced clarity about what technology decisions actually matter and which ones absorb attention without affecting outcomes.",
    content: [
      "Two years of enterprise AI deployment have produced some clarity about what technology decisions actually matter and which ones absorb attention without affecting outcomes.",
      "The model layer matters less than most technology conversations assume. The performance differences between leading frontier models on well-scoped enterprise tasks are meaningful but not decisive. Organizations that spent the first half of 2024 in extended model evaluation processes often ended up in a similar place to organizations that made a reasonable default choice and moved on. The time spent on model selection is frequently better spent on integration architecture.",
      "The infrastructure layer matters more. How data flows into the AI system, how outputs flow back into operational systems, and how the system behaves under production load are the variables that determine whether a deployment actually works at scale. These are not glamorous decisions but they are consequential ones.",
      "The evaluation and monitoring layer is the most underinvested area in most enterprise deployments. Organizations spend significant effort on getting the system to work in development and staging, then deploy with minimal instrumentation for monitoring performance in production. Systems that are performing well degrade gradually, and without measurement, the degradation goes unnoticed until it creates a visible operational problem.",
      "The governance layer is the one most organizations are still working through. Who is accountable for AI system behavior, how errors are escalated and resolved, and how the system is updated over time are questions that need operational answers, not just policy documents.",
      "Get the infrastructure right, instrument everything, and assign clear ownership. The model will follow.",
    ],
  },
  {
    slug: "two_years_in",
    title: "Two Years In: What Enterprise AI Adoption Actually Looks Like",
    date: "January 8, 2026",
    category: "Strategy",
    readTime: "5 min read",
    excerpt:
      "Two years of serious enterprise AI deployment have produced a picture that is both more encouraging and more complicated than the projections suggested.",
    content: [
      "Two years of serious enterprise AI deployment have produced a picture that is both more encouraging and more complicated than the projections suggested.",
      "The encouraging part: AI is delivering real operational value at scale. The organizations that moved decisively in 2023 and 2024, identified the right problems, invested in integration, and treated adoption as a change management challenge rather than a technology rollout, are running measurably leaner operations. The ROI is not theoretical. It is in the numbers.",
      "The complicated part: the distribution of outcomes is extremely wide. At one end are organizations with mature AI programs, multiple production systems, and a clear roadmap for the next phase of deployment. At the other end are organizations that have been running the same pilot for eighteen months, waiting for something to change. The gap between these groups is not closing.",
      "What separates them is not resources, industry, or access to talent. The organizations that have succeeded share a common profile: they defined problems before they selected technology, they treated deployment as the goal rather than exploration, and they held the AI initiative to the same accountability standards as any other operational investment.",
      "The organizations that have struggled share a different profile: they started with the technology rather than the problem, they measured inputs rather than outcomes, and they treated skepticism about results as a communication problem rather than useful data.",
      "The AI landscape in early 2026 is more mature than it was two years ago. The technology is more capable, more accessible, and better understood. What has not changed is the underlying requirement for operational discipline. The technology will not compensate for a poorly defined problem, inadequate data, or an organization that has not committed to deployment. It never did.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
