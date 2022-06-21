---
layout: post
title: "Quick wins, part 2: Method names revisited"
categories: article
date: 2019-03-05
---


Yesterday, we had the first part of this series on quick wins and simple steps to improve your code quality. It was about naming — specifically variables and method names.

Two things were not 100% right in these examples.

## The first error

You might have noticed that my loop examples were written in Ruby code. Yet the method name `doSomething` was written in _camelCase_. This is unusual for Ruby code where developers tend to use _snake\_case_ for method names.
I did not lint that email. Hence no robot told me about my error. I believe it is a good example of the benefit of automatic linting. This error would have been found. If you read the code and were put off by this naming scheme, you even experienced why conventions and rules are necessary: Because coding by the rules helps developers to focus on the semantics of the code, not the syntax.

## The second problem

Do you remember that I wrote about JavaScript loops and gave the classic `for` loop example? I complained about the `i` variable and that it should be called `iterator`. Perhaps you did not like this idea and my example? Let me take a step back for a second.
When naming variables and method names, you have to make sure they "speak." The names should indicate their meaning and make it easier for another developer to understand the semantics of your code. Yet, when you are fully aware of the problem domain you code deals with, it can happen that you try to be **too specific**. If you are, you tend to use long, verbose names for variables and methods. An example could be this:

![][image-1]
A common value for the allowed length of method names is 30 chars. The above example could be broken into two methods.

![][image-2]
The next possible quick win might be to think about the existence of these methods inside the `Article` class. Verifying and fixing meta tags surely does not need to be done inside this class. If you want to follow the Single Responsibility Principle, you should make sure that the Article class does not have a reason to change, if you decide to change something about verifying and fixing meta tags. Rather the Article class might change when you decide that an article should have a mandatory sub-headline.

Back to the `iterator`. This name could pass the test for _too specific_. Only, when `i` refers to a variable that is declared and initialized **outside** of the scope of the loop, does it make sense to choose a different name. Or doesn't it? As always it depends. The classic for loop is taught in almost every book on JavaScript, and it is easily identifiable as to what it is. But there might be reasons to deviate from that, as I indicated above.

## Conclusion

To summarize:
1. Choose good names. 😎
2. Spot places where knowledge about something does not belong.

Tomorrow we'll look at another example for 2 and a practical idea of what to do about it.

[image-1]:	https://holgerfrohloff.de/wp-content/uploads/2019/03/example1.png
[image-2]:	https://holgerfrohloff.de/wp-content/uploads/2019/03/example2.png