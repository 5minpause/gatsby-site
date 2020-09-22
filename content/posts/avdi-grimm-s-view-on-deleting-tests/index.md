---
layout: post
title: "Avdi Grimm's view on deleting tests"
categories: article
date: 2019-03-19 16:24:00 +0200
---

A few weeks ago I wrote about [deleting your tests][1]. Yesterday I received the weekly email from [Avdi Grimm][2], where he touches on this subject.

> Some premises about my relationship with unit testing:
>
> I like test-driven development.
> I like driving out individual object design small, isolated (e.g. no database) unit tests.
> I think of these unit tests as a design aid, full stop. Any help they provide with preventing regressions is gravy.
> I treat unit tests as disposable. Once they have served their purpose as design aids, I will only keep them around so long as they aren't getting in the way.
> These four premises are strongly interconnected. Take away #1 (test first), and tests are no longer a design aid and none of the other points are valid. Take away #2 (isolation) and we get into integration test territory where there's a much higher possibility of tests having regression-prevention value. Take away #3 (design focus) and the other points lose their justification. Take away #4 (disposability) and I spend all my time updating tests broken code changes.
>
> This makes  it easy for me to find myself at cross purposes with others in discussions about unit testing, because often they come into the conversation not sharing my premises. For instance, if your focus in unit testing is on preventing regressions, you might well decide isolated unit tests are more trouble than they are worth. I can't really argue with that.
>
> A recent conversation on this topic inspired the thought from the driving-design perspective, maybe unit tests are really just a crutch for languages that don't have a sufficiently strong REPL experience. While I don't think this is strictly true, I think the perspective shines a useful light on what we're really trying to accomplish with unit tests. I almost think that what I really want out of unit tests is the ability to fiddle with live objects in a REPL until they do what I want, and then save that REPL session directly to a test for convenience in flagging API changes.
>
> That conversation also spawned the idea of immutable unit tests: unit tests that can only be deleted, never updated. A bit like TCR. I wonder if this would place some helpful incentives on the test-writing process.

You should subscribe to his newsletter, if you haven't yet.

[1]:	https://holgerfrohloff.de/newsletter/delete-all-your-tests/
[2]:	https://avdi.codes/