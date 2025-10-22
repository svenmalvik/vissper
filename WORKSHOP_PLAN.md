# Smart AI Meeting Companion Workshop Blueprint

## Workshop Goals
- Explain the meeting pain points the smart AI meeting companion tackles so every build choice supports practical needs.
- Recreate the four-step flow (record, transcribe, copyedit, export) while learning the AI skills behind it.
- Compare a native macOS build with a Node.js + Electron build so we know how to reach both Mac and Windows users.
- Prepare for early customers by planning token tracking, pricing, and the enterprise conversations that follow.

## Content Pillars
- Story first: connect landing-page messaging to technical priorities.
- AI foundations: transcription models such as GPT-4.1 and GPT-4.1 Mini, token use, and provider options (OpenAI, Azure, Anthropic, Google, ElevenLabs).
- Workflow design: prompt chaining, reflection, screenshot handling, and clean document output.
- Safety and operations: guardrails, context control, human review, and token accounting.

## Four-Module Format
Public cohorts run online across four evenings (≈2.5h each). Private cohorts can compress the same curriculum into a single on-site day.

### Module 1 – Understand the Product & Core AI Tools
We start with the user story, then set up the technical stack and model access we will use all week.
- Walk through the landing page and highlight the user problems we must solve.
- Connect to OpenAI and Azure OpenAI, store credentials safely, and send simple test calls.
- Compare major model families (GPT, Claude, Gemini, Llama) so we know when to switch.
- Learn token basics: how they are counted, why context windows matter, and how sampling knobs change tone.
- Practice simple system/user/assistant prompt roles and note good prompt hygiene.
- Agree when to vibe-code versus follow a spec-driven approach so everyone stays aligned.

### Module 2 – Build the Capture & Prompt Flow
With tools ready, we turn meeting inputs into clear text and visuals using repeatable AI patterns.
- Connect live transcription services and keep audio, transcript, and screenshot events in sync.
- Practice prompt patterns (instruction, chain-of-thought, few-shot) and build the first prompt chain.
- Add reflection loops so the model reviews and improves its own draft.
- Design function signatures for tool calling, ask for structured JSON, and validate the reply in code.
- Verify tool results with quick unit checks before adding them to the final summary.
- Run vision models on screenshots to tag key moments and write short captions.

### Module 3 – Make It Reliable & Collaborative
We harden the experience by adding safety checks, context control, and team workflows.
- List common hallucination risks in meeting notes and design guardrails for each case.
- Log prompts and responses, redact sensitive data, and build a replay script to debug failures.
- Manage long meetings with chunking, retrieval augmentation, and embedding lookups.
- Build an evaluation checklist with rubrics and wire automated tests or Evals into CI so bad prompts fail fast.
- Capture user feedback and corrections so prompts and models improve over time.

### Module 4 – Ship, Charge, and Scale
We package the solution for delivery teams, plan how to charge for it, and cover the enterprise checks.
- Finish export flows (Markdown, HTML, PDF) that bundle transcripts, screenshots, and summaries.
- Implement per-user token meters in code, store usage, and expose dashboards or APIs for billing.
- Pick licensing rules, usage limits, and alerts for overuse or unusual activity.
- Review security, privacy, and compliance tasks needed before enterprise pilots.
- Extend tool calling with simple agent hand-offs, validate tool output before use, and decide which patterns belong on the roadmap.

## Hands-On Milestones
- Build a flexible AI pipeline that swaps between GPT-4.1, GPT-4.1 Mini, and other providers while logging token use.
- Create a prompt chain that moves from raw transcript to cleaned notes, insights, action items, and a shareable summary.
- Implement function/tool calling with structured output, validate responses, and fail safely when the schema is wrong.
- Produce export templates (Markdown, HTML, PDF) that include screenshots and are easy to share and edit.
- Instrument token tracking per user and expose a basic monetization report.
- Wire an automated evaluation harness into CI so regressions surface quickly.
- Draft a go-to-market packet covering security, pricing, usage tracking, and analytics for an enterprise pilot.

## AI Integration Focus
- Compare Whisper with enterprise ASR services and test GPT-4.1 vs. GPT-4.1 Mini for summaries.
- Collect prompt patterns such as role priming, chaining, and reflection loops, plus the guardrails that support them.
- Practice structured outputs, function signatures, tool validation, and simple agent routing.
- Use automated scoring, embedding checks, and human review to keep outputs accurate.

## Developer AI 101 Segment
- Explain when to use embeddings versus raw prompt context.
- Review rate limits, cost planning, and backup strategies across providers.
- Discuss ethics, privacy, and data handling for recorded meetings.

## Operational & Monetization Considerations
- Meter tokens per user so shared API keys support fair billing and alerting.
- Track provider usage (OpenAI, Azure OpenAI) to match invoices and avoid surprises.
- Document guardrails, human review policies, and response plans if the AI goes off track.
- Outline how teams share, annotate, and improve AI-generated notes together.

## Supporting Resources
- Annotated landing page walkthrough deck.
- Swift/AppKit starter repo with ScreenCaptureKit boilerplate.
- Node.js + Electron starter for cross-platform experimentation.
- Prompt library templates (chain, reflection, export).
- Enterprise checklist mapping to Strategic Pilot deliverables.
