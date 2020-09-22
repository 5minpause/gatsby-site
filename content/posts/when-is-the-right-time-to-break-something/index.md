---
layout: post
title: "When is the right time to break something?"
categories: article, code review, quality
date: 2019-08-09 16:24:00 +0200
---


Please excuse this sensational headline. I am referring to classes in your software and to their design. But also to tests, but see below…

## Work

The past week I mainly tried to pair with my fellow developers to impart some knowledge onto them. We worked together on integration tests with Nightwatch.js which is something like Capybara from the Ruby world. A question that came up was "when do we stop testing?"

I have to share some details about our setup: We created a React application for the frontend and use the APIs provided by the backend developers. Those APIs are sometimes flaky. And generally it would be a bad idea to access them during the tests. This is because they would introduce a dependency in your tests that is outside of your control. Do you want to have your tests fail, because somebody changed something inside the APIs? And would you like your tests to succeed, regardless of whether the API was accessible or not?

The answer for both question is "yes". The first type of test is a system test, where you do a complete blackbox-style test of your system for (mostly) functional requirements. If the API changes, you would want to know. And you would like to have your tests fail and notify you of that change. *Well, you would want the backend dev to notify you beforehand, but still…*

The second type of test I was describing is an integration test. You want to find out whether the code you wrote tries to access the API in the required way and whether your software behaves as specified for the API's responses. But you don't need the actual API for that. You should use a MOCK API that replaces the real API and behaves just the same. And this mocked API should be under your control.

So much for the details. Because we wrote integration tests against the mocked API. We sent a request to get data, let's call it a widget and we specified it by its ID.

`GET /widgets/123-567-890 => widget.json`

We received JSON and displayed the widget in a form, so the user is able to edit it.

In this test, we edit a widget's category only. We send a `PUT` request with the whole object, even though we only update the category (A `PATCH` would be enough, but this is what the API specified…). We send the request to our mocked API. Since this was the "happy path" testing, we received a response that indicated a success. 🎉

A bit more of background:

- Back in our UI, where we display the widget, we do not display the category.
- When we get a successful response for the request, we update the internal state of the app (we don't use Redux). So we "save" the category.
- When we open the form the edit the widget, we fetch data from the API first and display that to edit.


Now the question was: "Where do we stop testing?"
Since we mock the successful response anyway, do we test that we update the internal state with the widget? But we don't use or display that state (the updated category) anyway?!

I want to say, I had to think about this for a while. I wasn't sure what the best way would be. One answer could've been to display the edited category somewhere accessible for the test (perhaps as a data-attribute). But where's the business value in that?

A better answer turned out to be:
- For the happy path test for a successful response and be done
- Add tests for the failure case of unsuccessful responses


And the test and it's questions revealed another thing: We do not need to store the updated category right now. The person who wrote that code did it with a possible future requirement in mind. But it wasn't and isn't necessary right now. But since they didn't use TDD to create the code and its design, they didn't notice.

So that's one more history for "tests help increase the quality of code and design".

This is already long and I wanted to share something on the size of classes and when to refactor them. I guess this has to wait for the next issue.


### Talks/webinars

This topic from last week resonated with you. Thanks for the many responses. I will take you up on your offers and put you in a virtual crowd using Zoom, next time I am doing something like this.

## Personal

Fixed gear bikes seem to be a favorite for many readers. I hadn't anticipated that you would have experience riding these. I was glad I shared it.

On a completely unrelated note: In the future I will factor into my selection of clients whether they have a shower in their office or not. Having access to one helps me tremendously to combine my training plans into my working plans. Just yesterday I was able to do an intense interval running training *on my way to my client* because I knew I could shower afterwards. The alternative would have been to do it in the evening. But I'd rather spent the evening **with my family** instead. So this really increases my happiness.

Another personal endeavor of mine is to decrease my reliance on external/3rd party solutions for syncing data and storing it. This means stuff like iCloud and Dropbox but also other proprietary solutions inside apps that I use, e.g. DayOne.app

If I write my thoughts for years and years, I do not want to rely on some business to be able to access it. Same with my own business content. I mostly write code and articles, but also thoughts on strategy and lots of other things. I plan my business for the long run, which means I want to be able to access these things forever.

That's why I begin to turn away from iCloud and friends. I don't use Ulysses anymore for writing, but [Joplin](https://joplinapp.org/). I run my own cloud service (Nextcloud) and sync all my encrypted plain text files to the cloud and between my devices. That way I can tripple-back-up everything. Joplin is FOSS. I can save the source code in its current state (you bet I already did!) and will be able to access my notes for as long as I have a computer.

So I started migrating my data from the different apps I used to Joplin. This is an ongoing task and I also began to write an Importer to do this automatically. I have thousands of entries and notes in DayOne and other apps. It's quite a challenge. But this makes sense to me.





