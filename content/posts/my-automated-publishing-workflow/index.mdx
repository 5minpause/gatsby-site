---
layout: post
title: "My automated publishing workflow"
categories: "newsletter"
date: 2018-08-10 15:00:00 +0200
---
A week ago I mentioned my Automation project: Factory 0.1. During the last week I managed to get it to a point where it works. Today I wanted to tell you a bit about it.
**This will be a lengthy, nerdy post about details and automation.**
<!--more-->

### Writing the article

The first thing to do is to write my article/email. This is where it all starts, and this is what I look forward to doing. Writing happens for me in the application [Ulysses](https://ulysses.app/). I used to write in other apps like Simplenote, IA writer or more long-form in Scrivener. For a few months now, I use Ulysses exclusively for all my writing and notes. It feels good to have everything in one place and not scattered throughout more apps.  

I write in Markdown. All the time. I just got used to it over the years and I like the simplicity. Of course that comes in handy when writing Issues, Pull Requests, Wiki entries or Readme for GitHub powered repositories. Since GitHub uses (or supports) Markdown for all these, I can easily write for that. So if you never really got into Markdown, I can really suggest trying it out some more.  

I start my articles with the date of the current day or the date when I plan to publish the article. Sometimes I write a few days in advance—if I know I won't get around to doing it on the day in question.  
The next line will hold the title. I mention it in this detail because it's important in a later step.  
Then the body of the article will begin.  

I aim for a length of about 2 minutes reading time. Earlier in my career I wrote really long articles (like this one 😉). But I noticed that people tend to not want to read such long articles. And since I write every week-day, I try to keep it short and on-point. This is usually harder than it sounds. Ulysses helps me reach the 2-minutes-marker with a visualisation of the goal.

<img src="https://www.holgerfrohloff.de/assets/ulysses-goal.png" style="height: 450px;" />

Once I am done with the article, it's time to proof-read.

Then on to

### Publishing the article

I use [Jekyll](https://jekyllrb.com) a static site generator for my website. I used to use Wordpress but I didn't really _use_ Wordpress and the constant necessity for updates was annoying. Also I do not use PHP and have little experience. So I was always dependent on external themes and plugins for anything. But I wanted to be able to develop/hack on my own website. Since I do know Ruby very well it made absolute sense to use that as my website technology.  
Hosting is done via GitHub pages. So that's one more thing I do not have to worry about. The hosting, the SSL certificate and all "updates" are handled by GitHub. Of course updates to Jekyll are made by me. GitHub offers security monitoring for repositories, so I am always aware if a dependency it outdated or has a leak.  
Another convenience is the ubiquity of GitHub. It's available in many automation tools' stacks, so I can easily use it if needed.

To publish my article, I use my iPad. I love the iPad's form factor (it's a 12.9"), the tactility and using it. I look for ways to use it more.  
With the apps [Workflow](https://www.workflow.is/), [Drafts](https://getdrafts.com/) and [Working Copy](https://workingcopyapp.com/) I have everything I need.

#### Breakdown of the steps for publishing

To have a new article published with Jekyll, I need to do the following things. I used to do them manually:

0. Write in Ulysses
1. Create a new file in site/\_posts folder with the naming convention `_posts/${year-month-day}-this-is-the-title.markdown`
2. Format the front matter (configuration for this specific post/article in YAML) with  
	- date  
	- title  
	- layout  
	- categories
3. Insert the contents of the article from Ulysses
4. Commit the file/changes
5. Push to `origin/master`

The first two steps involved more work than I'd like to do for publishing.
After automating this process, this is the remaining procedure:

0. Write in Ulysses
1. In Ulysses: Sharing -\> "Preview in Text/Markdown" -\> `…` -\> "Open in another application"
2. Tap "Drafts" (version 5, it might also work in version 4), then in the Drafts-layer tap "Open"
3. Inside Drafts, I access my "Publish article to www.holgerfrohloff.de" action

The rest happens automatically and I am left with an open Safari browser tab pointing at my website.

Another thing that happens: IFTTT watches my site's RSS feed and publishes new articles to [LinkedIn](https://www.linkedin.com/in/holger-frohloff) automatically.

At the end I show ideas for further reducing the amount of steps that I will probably explore.

### The Workflow workflow

Before going into the actions for Drafts, I want to make a quick detour to Workflow.app. Using Workflow is actually the very first step that happens in the Draft action and I want to show what I am doing there.  

As you saw in the original procedure in step 1, I needed to create a file with the title of the article as part of the filename. In Rails you call this a [parameterized string](http://api.rubyonrails.org/classes/String.html#method-i-parameterize). Workflow creates it for me:

<img src="https://www.holgerfrohloff.de/assets/parameterize-text.PNG" style="height: 450px;" />

It gets the document's title as input. This is the first line in a Drafts document.
It returns the parameterized title.  
I will then use that output inside an action in Drafts.

### The Drafts actions

I actually have and use three Drafts actions:
- Publish article to www.holgerfrohloff.de (the main one I manually start)
- Commit-in-Working-Copy
- Push-in-Working-Copy

The latter ones are run by the first one.
While experimenting and trying to make it work I ran into a problem with Drafts, that I didn't know how to get around: I could not chain two x-callback-url action steps. If you do not know what x-callback-urls are, I will get to that in a minute.  
I researched how other solved that, and stumbled upon this article [Automating iOS: A Comprehensive Guide to URL Schemes and Drafts Actions](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/). It's from 2014 and targets Drafts 4 (the previous version), but the concepts still somehow applied to my problems. The author presents the necessary workaround:  
Use an `x-success` x-callback-url to call another Action in Drafts, with the `runAction` action. Puh. Here's the docs from [Drafts](https://getdrafts.com/urls/#runaction).

What happens is essentially this: Once the action is finished it returns to Drafts (specified so in the `x-success` callback) and executes the action `runAction` with its given parameters. In URL this looks like this:
```
working-copy://x-callback-url/commit/?repo={{5minpause.github.io}}&limit={{3}}&message={{broadcast}}&key={{secret-key}}&x-success=drafts5%3A%2F%2Fx-callback-url%2FrunAction%3Ftext%3D%26action%3DPush-in-Working-Copy%26allowEmpty%3Dtrue
```

The start is the x-callback-url for Working copy app. I execute the `commit` action on the `repo` 5minpause.github.io (my website) with the `limit` of 3 ([only changes with three files get committed](https://workingcopyapp.com/url-schemes.html#committing)) a `message` that serves as the commit message and the secret `key` needed to do this at all via x-callback-url. This is a requirement and safety mechanism by Working Copy.  
The value passed to the `x-success` parameter is url-encoded. This is needed for Drafts to be able to run it. Without encoding it would look like this:
	`drafts5://x-callback-url/runAction?text=&action=Push-in-Working-Copy&allowEmpty=true`

Again, `drafts://x-callback-url/runAction` just opens Drafts and tells it to use the `runAction` action. The param `text` is left empty (but it is required!). You could specify text to be included in your document (that is created as part of the action). I do not need that. `action` has the name of the Action I want to run in Drafts. You noticed, that is the name of one of my actions from above. The last param `allowEmpty=true` is decisive. It allows me to leave the `text` blank and essentially leads to the action being executed just on any document that happens to be active in Drafts. Since the "Push in Working Copy" action is document-agnostic that's exactly what I want.

But this was already the last step in the chain. I used that because it was easier to describe. The first step actually looks like this:

```
working-copy://x-callback-url/write/?repo={{5minpause.github.io}}&path={{_posts/}}[[date]]-[[workflow_result]].markdown&text=---%0a{{layout: post}}%0a{{title: "}}[[title]]{{"}}%0a{{categories: "newsletter"}}%0a{{date: }}[[date]]{{ 15:00:00 +0200}}%0a---%0a[[body]]&key={{secret-key}}&x-success=drafts5%3A%2F%2Fx-callback-url%2FrunAction%3Ftext%3D%26action%3DCommit-in-Working-Copy%26allowEmpty%3Dtrue
```

It starts with Working Copy and the [`write` action](https://workingcopyapp.com/url-schemes.html#writing). I specify the `path`. Notice the `[[date]]` value. This is Drafts-magic, as it automatically replaces/interprets certain values in the URL. The other one is `[[workflow_result]]` that is provided by an earlier action step in this action, the Workflow "parameterize text" workflow. The value for the `text` param is the contents of the document. It starts with the YAML front matter. Everything written in `{{ }}` is put like that into the document, including spaces, without escaping/interpreting it. `%0a` means line-break.  
At the end you see the "Commit in Working Copy" action being called as `x-success` parameter.

The last step is opening the Safari browser at https://www.holgerfrohloff.de and that is simply another `x-success={{https://www.holgerfrohloff.de}}` parameter. Since Safari is registered as the receiving app for http/https protocols, it gets used to open that URL.

And that's the thing about x-callback-urls. There is probably a lot to say about it, but the essence is that apps can register for a certain protocol. Working copy registered for the protocol `working-copy://`, Drafts for `drafts5://`. Numerous other apps offer this as well. [This website](http://x-callback-url.com/) offers the spec for app authors to implement and shows a comprehensive list of x-callback-urls for different apps.

This is how it looks on my iPad:
<iframe src="https://player.vimeo.com/video/284349596" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/284349596">Automating publishing to a Jekyll website using iOS</a></p>
## Next steps

I have some ideas/things I'd like to try out:
- Automating the removal of the date. If you looked at the video, you saw that I manually remove the date from the beginning of the article. This could be automated.
- Wrap everything into a workflow that I can access/start from the share sheet on iOS. This would essentially remove everything after Ulysses. I would only need to call the action from the share sheet in Ulysses and I would be done.
- Try to improve usage of callback-urls in Drafts. While searching for ways to chain actions in Drafts, I created a topic on the forums: [https://forums.getdrafts.com/t/chaining-x-callback-urls-does-not-work-as-expected/2157/2](https://forums.getdrafts.com/t/chaining-x-callback-urls-does-not-work-as-expected/2157/2). The support then pointed out that using `Call URL` action steps might not be the optimal way. I should change those to use the `Call Callback-URL` action steps inside Drafts.
- Support drafting of articles. Sometimes I write these articles a few days in advance. I cannot, currently, publish them without running through the pushing to `origin/master` step.

**The big thing remaining is publishing to Drip.** Since I use Drip to send these articles as newsletters to my readers, I have to create the on their website and schedule them. Drip offers a REST API that I could probably use from within Workflow app.  An alternative would be to use Zapier to create these POST requests after pushing to GitHub. That might also work.
