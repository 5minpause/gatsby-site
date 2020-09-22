---
layout: post
title: "Quick wins and simple steps for improving the quality of your code"
categories: article, quality
date: 2019-03-04 17:45:00 +0200
---


Good software needs good code. If you want to achieve a high quality in what you ship, you need to care for the quality down to each method you write.

I want to use this week to write a small series on techniques and ideas about how to increase your code quality.
When I look at code, it is often possible to find spots in the code, where a simple change can be made. In some cases it's even an easy tweak.
Some of these examples will come from the the actual code that I worked on. Others will be created by me, for this series. You won't see any code from my clients, of course. The only thing I take from them is the inspiration. And money. 🤣

## Naming

A good place to start with is to look at variable names. If you have a call to `.map()` or `.each()`, then take a look at what you are iterating. Is is a list of `Book` objects? Then you should call each item that you are iterating what it is, `book`.

```ruby
# this is not good
items.map do |i|
  i.doSomething
end

# this is better
list_of_books.map do |book|
  book.doSomething
end
```

This would take care of the naming of some variables.

In classic JavaScript loops, you often see a variable called `i`:
```js
for (i = 0; i < array.length; i++) {
  // something happens here
}
```

Well, what's this `i` anyway? If it's an iterator, why not call it that? Even worse, when you sometimes combine `i` with a `j`and a `k`:
`for (i = 1, j = 0, k = 150; i <= 5; i++, j += 30, k -= 30) { /* do work */ }`
(This is copied from a [SO answer][1])

I bet you a non-trivial amount of money that you won't be able to tell me **without looking it up** what these variables refer to 9 months after you wrote code like that.

Will it take a small amount of extra time to come up with a proper name and use that instead? Probably. Will this extra time be saved **every time a(nother) human reads that code**? Hell yes!

A possible next step would be to change something about the `doSomething()` method. **What the hell does it do?** Why doesn't it tell us already from its name?
In this case? Because that's just pseudo-code for you 😜
But please make sure that you use proper and valid names for your methods and variables.

[1]:	https://stackoverflow.com/a/8348823 "SO answer"