---
layout: post
title: "Quick wins, part 3: Keep it local"
categories: article
date: 2019-03-06 16:24:00 +0200
---


Yesterday I closed with this idea:

> Spot places where knowledge about something does not belong.

What do I mean by that? Sometimes I come across some code that does not read right. I will use a pseudo code example to illustrate:

```ruby
class Foo
  def initialize(bar_service)
    @bar_service = bar_service
  end

  def quux
    if @bar_service.greeting == "hello"
      @bar_service.greet("goodbye")
    else
      @bar_service.greet("hello")
    end
  end
end

class BarService
  attr_accessor :greeting
  def greet(message)
    @greeting = message
  end
end
```

What bothers me with this code? The method `quux` has too much knowledge about how the `@bar_service` works. `Foo.quux` knows that the `@bar_service` has an instance variable called `greeting` and at least one specific value it might have (`"hello"`). It also knows two values that the `greet()` method might be called with.
Now it happens that this knowledge about how the `greeting` and `greet` work, is also spread into other parts of the application. What happens if you need to change something about the `greet()` method? You have to find every place in your application and update it to reflect the new changes.
This isn't good.

There are places like this inside many applications. You might need some practice to spot them, but with some practice it becomes easier. For this example I would like to suggest to move all knowledge about how `greeting` and `greet` work inside the `BarService`. Start with the conditional, like this:

```ruby
class Foo
  def initialize(bar_service)
    @bar_service = bar_service
  end

  def quux
    @bar_service.greet
  end
end

class BarService
  attr_accessor :greeting
  def greet
    if @greeting == "hello"
      @greeting = "goodbye"
    else
      @greeting = "hello"
    end
  end
end
```

Now we are free to change the internals of the `greet` method. We could add a third option or change it completely. The class `Foo` does not need to change at all. It continues to call `greet` as if nothing has happened.

One of my overarching topics is testing. A refactoring like this should be covered with tests. Not only do you need tests for the `Foo` class, but also for how `BarService.greet` works. And for every part of the app that interacts with either.

Tomorrow we'll look at another way to do a refactoring.