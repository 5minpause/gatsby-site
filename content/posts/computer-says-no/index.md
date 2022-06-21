---
layout: post
title: "Computer says no"
categories: article
date: 2019-02-26
---


> […] we do have formal rules that we should obey when writing code. A team has rules, and new team members need to learn them before trying to write any code.

That's what I wrote yesterday. It's my email so I can write whatever I think is correct. You'll let me know through your answers if I am wrong.

My friend Tino answered on Friday and asked whether a university degree or certificates might function as a driver's license. And that is true to a certain degree. I am getting a new certificate these days as well. I hope to complete the exam on Wednesday (ISTQB Advanced Level — Technical Test Analyst).

The obvious difference to a driver's license? I am not legally required to obtain one before I can start writing code. Tino also said that he'd find it interesting to be (self)tested in current web-standards and best practices. I do believe these tests are valuable. If I come around to create one, I'll let you know.

Back to the beginning of the email. Why do rules matter to a team? Developers have their style for writing code. Even if there are rules and certain regulations you have to follow, developers still find ways to write code in their unique style. And that's a good thing. It would be boring otherwise.
Still, this style has to obey the rules. Here's why:

- The code won't be too complex. Because your static analysis tools tell you if your cyclomatic complexity metric is too high.
- Classes and modules will have low coupling and high cohesion. This leads to code that's more easily testable and has higher reusability than other code.
- If you have an error if explaining comments are missing, you could make sure that your developers take some extra time to make sure code can be easier to understand. Other rules, like variable and method/class/module naming conventions, have the same goal.

In short: Rules help your team to write code that is maintainable and has low technical debt. This reduces the **total costs of ownership**. If you only look at the cost of writing the code and delivering the software, the costs might be higher if you follow stricter rules. Over the complete lifecycle of a software (product), the total costs would be lower because of better maintainability and a lower number of defects.

This is already getting long. See you tomorrow with even more thoughts on this topic.