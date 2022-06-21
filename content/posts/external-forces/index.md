---
layout: post
title: "External forces"
categories: article, code review, quality
date: 2019-03-15
---

I am occupied with learning these days. Learning on my own about [visualizations of data][1] among other topics. But also learning about learning. For that I read what other people think about learning. There are many things I have to learn about this whole topic. One thought I saw repeatedly, was about external forces, or limiting factors.

Let me elaborate what I mean by that: There are people that can motivate themselves more easily than others can. They reach their goals or at least try very hard. Others give up more easily when they face some resistance. As always, there are people in the middle between these extremes. You know best which group you belong to. 💪

What has this do with software quality? I am getting there… 😉

I am wondering how external forces could help improve quality. If you need to reach your goal and you don't belong to the group of highly self-motivated people there are options like hiring a coach. Athletes do that all the time. I pay for a "virtual" coach that guides my running efforts.

How could you hire a "virtual" coach for your coding efforts, for reaching your targets on your software quality metrics? You could hire me or other "real" coaches, of course. But that doesn't scale too well and might be too expensive.

Again, for some people it is easy enough to use static analysis or linting — a kind of coach in it's own right — and follow their guidelines. Yet, still there are people that ignore the warnings or guidelines imposed upon them by the tools. Reasons may be a hard deadline or too much workload. How could we offer external forces, limiting factors that help them, guide them, towards doing the right thing?

One solution I can think of is to have a robot not accept your code when it is below standard or ignores guidelines. A robot could be anything that measures and grades your code and reports back to your team. Some tools already offer this, for example GitLab. If you want to merge code that decreases the overal quality metrics, you are not allowed to do so. So that would be one.

Another idea: If you try to commit or merge such code, you need to consult with another developer about the code. Once you worked on it together, the other dev has to enter her secret key, to remove the lock on the merge. This forces you to pair on code more often.

When it comes to teaching there is this saying of the "glass has to be empty (enough)." You cannot pour water into it, when it's already filled. Said ideas 👆probably won't work for a team that isn't aiming for learning and improving.

I will continue to think.

[1]:	https://holgerfrohloff.micro.blog/2019/03/13/today-i-am.html