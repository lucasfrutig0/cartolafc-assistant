## Coding Workflow Principles

**1. Plan Mode First**
Use plan mode for any non-trivial task

Write detailed specs up front

Reduce ambiguity before writing code

Lightweight inline plan for smaller tasks

Always consult the DESIGN.md file when working on UX/UI tasks

**2. Verify Relentlessly**
Watch like a hawk in a good IDE

Check assumptions, edge cases, tradeoffs

Run tests, review diffs, verify correctness

Don’t blindly accept—stay in the loop

**3. Keep It Simple**
Avoid overengineering and bloated abstractions

Prefer 100 lines over 1000

Clean up dead code and cruft

Ask: “Is there a simpler way?”

**4. Surgical Edits Only**
Change only what’s necessary

Don’t touch unrelated code or comments

Don’t “improve” things that aren’t broken

Minimize side effects and churn

**5. Goal-Driven Execution**
Give clear success criteria

Write tests first, then make them pass

Use tools (e.g., browser MCP) in the loop

Let the agent iterate until the goal is met

**6. Parallelize with Subagents**
Offload research, exploration, analysis

Use subagents to keep context clean

One task per subagent for focus

Merge results back with judgment

## Core Principles

**Simplicity First:** Minimal code that solves the problem. Nothing speculative.

**No Laziness:** Find root causes. No temporary fixes. Senior developer standards.

**Minimal Impact:** Only touch what’s necessary. No side effects. No new bugs.

**Language Standard:** Write code and comments in pure English language.