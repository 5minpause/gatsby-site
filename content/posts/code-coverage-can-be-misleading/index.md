---
layout: post
title: "Code coverage can be misleading"
categories: article, testing
date: 2019-03-11
---


During the last week, I had two discussions about code coverage. Code coverage is the metric of how many lines of code are covered by your automated test suite. Many test frameworks have built-in ways to measure this. Other times you have to install another tool manually. When you run your tests you then see how many lines are not _covered_ by a test. That means that no test was run where this line of code was _evaluated_ or _executed_ or _interpreted_.

When you reach 100% code coverage, what then? Are you done? Could you guarantee that there are absolutely no bugs in your code?

If you are tempted to say _Yes_, or _"maybe?"_ then let me tell you that you are wrong.

Consider this piece of code.

![][image-1]

If you write a unit test for this method, the line `eval...` will be interpreted because of the `if emergency` at the end. The line is thus covered.
But the code is not covered or tested.

Admittedly, this is a very trivial example that I made up. In reality, there are some more profound things to consider.

If you have complex conditionals you might need a logic table where you compare all possible combinations of the atomic parts of the conditional.

![][image-2]

You cannot possibly evaluate this in your head and know whether you checked for every possible, sensible combination. Yet when you cover that line you are at 100% coverage and can go home, right?

So what do you do? Let's look at this tomorrow.

[image-1]:	https://holgerfrohloff.de/wp-content/uploads/2019/03/carbon.png "code coverage error"
[image-2]:	https://holgerfrohloff.de/wp-content/uploads/2019/03/conditionals.png "Conditionals"