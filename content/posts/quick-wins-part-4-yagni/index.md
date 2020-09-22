---
layout: post
title: "Quick wins, part 4: YAGNI"
categories: article, code review, quality
date: 2019-03-07 16:24:00 +0200
---

We refactored some code yesterday, to move knowledge about an implementation of a function back to where it belonged: Into the function's class and into the function itself.

Today I want to talk about another topic that often comes up when you are refactoring, or plainly "changing code."

It happened the other day, during a workshop I was doing on software testing. The participant wanted to apply his new knowledge and write tests for a given JavaScript class. He had written the code a few weeks before we did the workshop. During the hands-on part of the workshop, he wanted to add tests, to make sure everything worked and to make sure that he understood what I had been talking about.

We were lucky in as so far that something happened that usually happens next: He noticed that his code was not easily testable. The design of his class made it harder for him than he would have liked. We talked about the problem, and he noticed the source of it. His class had too many responsibilities. He extracted the code in question into a new service and could then **mock** the new service when testing his original class. This was good. He was ecstatic. He made progress!

Having gained so much momentum, he went overboard: During his test-design, he wanted to be too clever and tried to write an elaborate test setup which was to be reused between different test runs. It was supposed to be a reusable, parameterizable do-it-all function that could setup the tests just right. With no duplication.
In short, it was so much code with so much logic that it would've warranted its own tests. And the worst thing? It didn't work and made trouble for writing his tests.

I was a bit thankful because that gave me the opportunity to tell him:

> Premature optimization is the root of all evil.

Perhaps you've heard that saying already. Donald Knuth coined this phrase. There's more to it, but that could be discussed in another email.

Back to my tester. After talking about the problems his function gave him and the difficulty in getting it right he settled for the simple solution:
Write your tests. Accept duplication. Keep it simple, use copy & paste if it makes you faster and is more convenient. Write the tests you need and keep them _green_.
**And after all that, and only then, refactor your tests to remove duplication where applicable.** Don't try to write the perfect code from the start. Let the design evolve with the help of your tests. Don't be afraid to make baby steps and don't expect to have perfect code after the first try.

I hope you liked this series. Perhaps you could take something away from it. If you have questions, let me know.

Tomorrow I'll be off; it's a holiday where I live, and I'll use it to spend time with my family. See you on Monday. 👋