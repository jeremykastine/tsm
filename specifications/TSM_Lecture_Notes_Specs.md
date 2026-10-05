# TSM Lecture Notes Specifications

This file governs the TSM 098–099 HTML lecture notes. Treat it as authoritative unless a newer explicit instruction supersedes it; when that happens, apply the new instruction and update this file.

## 1. Purpose and maintained source

The notes serve as assigned readings for students who miss class or need independent review and as lecture notes the instructor can isolate with the Windows Snipping Tool and mark up during class. Prioritize clear worked examples, unobstructed work areas, and fast navigation.

Edit the HTML files in `lessons/` directly. Keep one maintained copy of each topic rather than a parallel Word edition.

All 37 topics were compared with the Word documents before removing duplicates. Topics 2–37 match in content after accounting for formatting. The Unit 1 Word document is retained as a reference because its older Topic 1 contains guidance on building multiplication facts and connecting multiplication with division that is absent from the newer HTML lesson. Do not treat that document as an editable source to synchronize with HTML or recreate Word documents for Units 2–5.

## 2. Topic files and unit boundaries

| Unit | Title | Topics |
|---|---|---:|
| 1 | Arithmetic | 1–8 |
| 2 | Expressions | 9–23 |
| 3 | Solving Equations | 24–29 |
| 4 | Two-Variable Equations | 30–34 |
| 5 | Word Problems | 35–37 |

Maintain one HTML file per topic using the established filenames. Do not change topic numbers, instructional order, or unit boundaries unless explicitly instructed.

## 3. Terminology and course labels

- Use **Unit 1** through **Unit 5** for the lecture-note collections.
- Assessments are called **tests**, not “unit tests.”
- Use **TSM 098** and **TSM 099** consistently.
- Preserve every topic's **Assigned to** line. Do not infer assessment coverage from a topic's course assignment.

## 4. Topic introduction

Begin each topic with its established title, Assigned to line, brief Overview, and Key definitions. Keep detailed procedures, warnings, reasoning, and examples in the worked solutions near the steps where they become relevant.

## 5. Worked examples and browser behavior

- Publish one HTML file for each topic, numbered Topic 1 through Topic 37.
- Place a simple `index.html` at the repository root and group all topic links by unit as a table of contents.
- Do not imitate Word pages or insert page breaks in the HTML edition. Let each topic flow continuously in the browser.
- Begin every worked example with a horizontal rule and a bold **Problem N** label. Number examples in document order and restart at **Problem 1** on every topic page.
- Place each worked solution directly beneath its complete problem statement in the document flow, and begin it with the corresponding bold **Solution N** label.
- Hide the solution initially with a method such as `visibility: hidden` that preserves the solution's full natural height. Do not use `display: none`, remove the content from layout, or replace it with a fixed-height gap.
- Put a real `Click to show solution` button in the right margin beside the beginning of the solution area, aligned with the **Solution N** label rather than the problem statement. The button must remain outside both the problem/snipping column and the blank solution area.
- Clicking the button must reveal the solution in its reserved space without moving later content. Change the button to `Click to hide solution`; clicking it again must restore the blank area.
- Include the initial hidden state directly in the solution panel's HTML and reinforce it in JavaScript, so a stale or delayed stylesheet cannot expose solutions.
- Keep the entire problem and naturally sized blank solution region unobstructed for instructor screenshots.
- Preserve topic titles, **Assigned to** lines, overviews, key definitions, mathematical notation, instructional order, and worked explanations.
- Keep the HTML design simple, readable, responsive, and suitable for GitHub Pages.
- Keep the co-listed schedule and both specification files in the repository. The Unit 1 Word document is retained only as a reference because its older Topic 1 contains material absent from HTML.

## 6. One-problem rule and compare/contrast exception

Normally, place only one problem in a worked-example section.

More than one problem may share a section only when the problems are intentionally presented as a comparison. In that case:

- begin with wording such as `Compare and contrast the following two problems.` or `Compare and contrast the following four problems.`;
- place all compared problem statements in the problem statement, before the solution area; and
- make the solution both solve the problems and explicitly compare their structures, methods, or results.

Do not use the compare/contrast exception merely to save space.

## 7. Examples-first instructional style

- Introduce procedures through problems rather than through a long preliminary lecture.
- A student may initially see a problem without yet knowing the method. The worked explanation must then be complete enough for an absent student to reconstruct the lesson.
- Put the detailed rule, method, warning, and reasoning near the step where it becomes relevant.
- Keep student-facing prose direct and relatively short.
- Preserve useful conceptual explanations, but integrate them into worked solutions instead of creating separate sections headed “Procedure,” “Summary,” “Common Mistake,” or similar.

## 8. Worked-solution standards

- Show the intermediate steps students are expected to learn, not only the starting expression and final answer.
- Keep each algebraic line equivalent to the preceding line unless the prose clearly explains a substitution, comparison, or check.
- Explain important sign changes, distribution, cancellation, common denominators, factoring decisions, equation-solving operations, and graphing choices in plain language.
- State restrictions from the original equation before canceling factors or moving variable denominators to the opposite side.
- Check possible extraneous solutions in the original rational equation.
- Include both answers when taking an even square root in an equation unless context restricts the result.
- Do not hide a substantial expected step behind “after simplifying.”
- Use conventional notation with MathJax-compatible TeX in the HTML. Keep equations as editable text rather than screenshots or plain-text approximations.

## 9. Difficulty and example selection

- Progress from a clear standard case to modest variations.
- Keep coefficients and constants focused on the intended concept.
- Include positive and negative cases when sign behavior matters.
- Use fractional answers when instructionally relevant, but not in every example.
- Avoid large or unpleasant numbers unless they deliberately motivate a useful strategy, such as simplifying before multiplying.
- Avoid unnecessary arithmetic, expansion, or factoring that distracts from the topic.
- Remain within the established TSM 098/099 course scope and schedule.

## 10. Practice material

- Clearly distinguish an assigned practice set from a worked lecture example.
- Do not place multiple unrelated practice problems in a worked-example section.
- If a practice problem is incorporated into the lecture-note sequence as an example, give it the same section structure: problem, then a complete worked solution with its natural height reserved when hidden.
- Unsolved practice sets should be maintained separately or added only when explicitly requested; they should not interrupt the standard worked-problem sequence.

## 11. Cross-listed consistency

- Preserve the established topic sequence for the cross-listed TSM 098/099 course.
- Keep TSM 098 examples at the established foundational level and TSM 099 examples at the established intermediate-algebra level.
- Do not use lecture-note edits to redefine test coverage; assessment specifications are maintained separately.

## 12. Editing workflow

For a topic-specific revision, edit the affected HTML topic files and update this specification when the instructional requirements change. Preserve titles, topic numbers, assignment labels, navigation links, and the existing solution-reveal behavior.

For a global change, apply the requirement consistently across all affected HTML files. Avoid unrelated content changes.

Before pushing, review every changed problem and worked solution, check the mathematics, and verify local links and HTML structure. For layout or interaction changes, inspect the affected pages and confirm that revealing or hiding a solution does not move later content. Check that the controls remain outside the problem and solution areas at desktop and mobile widths.

## 13. Quality-control checklist

- All 37 topics remain linked from `index.html`, grouped by unit.
- Topic titles, assignment labels, overviews, and key definitions are intact.
- Worked problems and solutions are correctly numbered in document order, restarting with Problem 1 and Solution 1 on each topic.
- Each example begins with a horizontal rule and contains a complete problem statement and worked solution.
- Only intentional compare/contrast sections contain multiple problems.
- Solutions begin hidden while reserving their full natural height.
- Reveal/hide controls are accessible and outside the areas used for instructor screenshots.
- Mathematical notation, intermediate steps, restrictions, and final answers are complete and correct.
- There are no clipped expressions, overlapping controls, missing glyphs, broken links, or placeholder text.
- Documentation and the contents page refer only to files that remain in the repository.

## 14. Solving equations with numerical or variable denominators

Apply this approach consistently in Topic 28 and Topic 29, in the HTML notes:

- Combine and simplify each side first, using a common denominator within a side when needed. Reduce fractions and cancel common nonzero factors where possible.
- Once each side is a single simplified expression, move any remaining denominators to multiply the opposite side. When both sides have denominators, move both in the same step. Each denominator multiplies the entire opposite numerator.
- Include examples with a denominator on only one side and with denominators on both sides. Simplification may also remove all denominators before any need to move them.
- Use fraction notation throughout this instruction. Do not write reciprocal factors with negative exponents and do not use the term “cross-multiply” or its variants.
- Teach the method through these worked steps rather than instructing students to multiply every term of the original equation by an LCM or LCD. Common denominators are still used to combine fractions within each side.
- Explain the equality-preserving multiplication where it first becomes relevant. Move a denominator only when it divides the whole side, and retain parentheses around sums and differences.
- For variable denominators, state restrictions from every original denominator before simplifying. Retain them even after a denominator disappears. Divide out a common factor only when it is nonzero for allowable values, and check every candidate in the original equation.
