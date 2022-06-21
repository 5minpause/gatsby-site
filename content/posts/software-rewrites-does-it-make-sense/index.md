---
layout: post
title: "Software rewrites - Does it make sense?"
categories: article
date: 2019-02-21
---


I came across a very interesting article written by Herb Caudill, on different perspectives on rewriting software. He highlights 6 different stories of how a rewrite went. You can read about Basecamp, Netscape Navigator, Gmail, and others.

It is a long article, over 30 minutes according to Medium.com. And I am also sorry for linking to Medium. I don't like them, and I resent sending them traffic. But this story might be worth it.

Here you go: [Lessons from 6 software rewrite stories][1]

NB: I do have experience with software rewrites myself. I took part in two endeavors. One thing was a client application. The legacy app was written in Rails 2 (I believe, it might have been Rails 3) and heavily patched. This made maintenance and feature development quite expensive. We rewrote the software but kept quite close to the original in functionality. The rewrite enabled us to use modern gems and solutions we had created in-house for other clients. This used synergies. It was an ambitious project. In the end, I think it didn't make too much sense, financially. But I couldn't be sure about that one.

Another project where I helped on a rewrite concerned frameworks for iOS applications. We had customers that wanted to publish iPad magazines on the App Store. To make it easier for themselves, previous developers had written a custom publishing framework. This framework was reused on every project. It was extendable, reusable and efficient. But it was also difficult to handle and very limiting with regards to layout and design of the magazines. Which was a problem for the clients. So they set out to rewrite this. I joined the company while the project was still in progress. I left 2 years later. The project was still ongoing. The rewritten framework was used in every client project, **alongside** the older framework. For some features, you had to use the old one, because they weren't yet supported on the new framework. For other use-cases, you had to use the new framework. Especially for certain pages in the magazine, with new layouts. Yeah, it sucked.

[1]:	https://medium.com/@herbcaudill/lessons-from-6-software-rewrite-stories-635e4c8f7c22