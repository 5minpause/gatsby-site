---
layout: post
title: "2018 State of Code Review Study"
categories: article, code review
date: 2019-02-15
---

> 81% of respondents who were satisfied with their code review process were also satisfied with the overall quality of their software. Respondents who were not satisfied with their code review process were half as likely to be satisfied in their overall software quality, with only 40% respectively.

This is from a research study done by SmartBear.

This image tells us that the majority things code review is the way to go to increase code quality. This might be true, or it might not.
The quality of a review depends 100% on the knowledge, ability to communicate and the time a reviewer takes to dive into the code.
Static analysis is way down in second to the last place. Unit testing is right behind code reviews.

I could argue either way. My problem with this study is the term **code quality**. Code quality to me means that you talk about things like coupling/cohesion, readability, and maintainability, adherence to standards, low bug count. Quality metrics **your code exhibits**. Code review is not the best tool to increase this metric. Robots and static analysis are. You need impartial tools that hold you to a strict standard. People don't do this. They are lazy.
If you talk about **software quality**, on the other hand, that's where you need people. Thinking about and discussing software architecture and design, debating about usability. Fine-tuning the visual design of a product. This is where reviews are the go-to tool for the job.

I guess this distinction was unclear to most participants. That's a shame.

You can read the study [here][1]. I don't link to their signup form for the study. They ask details like your phone number before you can download it. That's bad practice, hence the direct link. I'd be happy to hear your thoughts on this.
Do you make a distinction between code and software?

[1]:	https://smartbear.com/SmartBear/media/ebooks/The-2018-State-Of-Code-Review-by-SmartBear.pdf