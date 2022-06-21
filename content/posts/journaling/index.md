---
layout: post
title: "Jouraling"
categories: article
date: 2019-07-24
---


I am writing again. Mostly for myself. As a journal.
In the future I'll try things a bit differently around here: I want to share what I am thinking about, how I work and what I am working on (as far as it makes sense in regard to my clients and NDAs).

## Working

I secured a new client for autumn and the first months of 2020. I'll be joining them as interim tech lead. I am excited.
This will let me work a lot with Rails again. The last months were JS/TS only…

Something that I was proud of during the last week was a caching solution I created. Let me describe it briefly:

- We are in a TypeScript project
- There are external APIs we are calling to populate our app with data.
- We display the same value in multiple places on a page or after navigating somewhere else.
- We do not have a global state management like Redux etc. (Why is a discussion for another time 😉)
- Every display of the value resulted in a fetch to the same API resource.

What I built was a cache-aside solution, where I cache the (pending) Promise for the first request. All subsequent requests receive this Promise as return value, without fetching again. Once the Promise is resolved, the value appears where it's supposed to appear and every requests happens just once.
This is possible and makes sense, because the values change very infrequently and using the "old" value until the site is reloaded works just fine.
We don't yet need things like `etag`s and `ModifiedSince`. But perhaps this will be added in a future situation.
Anyway, this was cool and also challenging to find a proper solution. Caching the Promise itself was an idea that was developed together with my co-worker, Franz.

I am redesigning my website these last months. It always takes longer, because nobody pays me for that 😂. It's  progressing nicely, thanks to the help of my designer. She's great. I am really looking forward to sharing this with you.
Also, I need to get back into the rhythm of writing articles. I have a lot of topics planned and see my traffic increase steadily.

I did not renew my subscription to the email marketing service  Drip that I used during this last year. They were too expensive anyway. You will receive this mail through Drip, still. But future mails might be sent by something else. I'll keep you posted and hope to be able to complete the migration without any hassle for you.

## Personal

I am in the middle of a training program for my next 10 kilometers race. It's quite intense, I am running 4-5 times a week.
To make the time for that I started to do run-commutes. This means I run to my client in the morning, take a shower there and run home in the evening/afternoon. This is demanding but works out quite nicely. The shortest distance to my current client is about 6km, so it's fine to run it twice.

I have a height-adjustable desk at my home office now and it is awesome. I love the flexibility. I actually stand most of the time. But after lunch, for example, I tend to sit down more. Ha, just wanted to share. If you are on the fence about getting one, you should!

## Thinking / Reading

A quote that still makes me think:

> Recently, one of my favorite questions to bug people with has been “What is it you do to train that is comparable to a pianist practicing scales?” If you don’t know the answer to that one, maybe you are doing something wrong or not doing enough. Or maybe you are (optimally?) not very ambitious?

It's from this article: [https://marginalrevolution.com/marginalrevolution/2019/07/how-i-practice-at-what-i-do.html][1]

My current answer is "my side project" I am working on (nothing to share publicly here, yet). But I do know that I am not stretching doing that project. Compared to my run training, this is like a relaxed long run. Important for basic fitness and healthy, but nothing that increases my ability by much.
The caching solution I wrote about certainly stretched me and I learned new things there. But this was work and not practice. And not deliberate but a happy "accident". I should be able to plan for these training sessions.

So this is something I am thinking about.

Holger

[1]:	https://marginalrevolution.com/marginalrevolution/2019/07/how-i-practice-at-what-i-do.html