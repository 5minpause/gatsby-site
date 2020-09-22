---
layout: post
title: "Complex conditionals"
categories: article, code coverage, testing
date: 2019-03-13 16:24:00 +0200
---

The other day we dealt with code coverage and gnarly conditionals. I promised to offer a way to be able to test them properly.

**THERE IS NONE.**

Ha, what a bad joke. But the real answer might not be better, depending on your point of view.
What you have to do is create a table.

```ruby
(A || B) && C
```

This is our conditional.
```ruby
| m | A | B | C | RESULT |
----------------------
| 0 | T | T | T |    T   |
| 1 | T | F | T |    T   | x
| 2 | F | F | T |    F   | x
| 3 | F | T | T |    T   | x
| 4 | T | T | F |    F   |
| 5 | T | F | F |    F   | x
| 6 | F | T | F |    F   |
| 7 | F | F | F |    F   |

# m is the test case
# A, B, C are the atomic parts of the conditional
# RESULT is the result of the evaluation of the conditional
```

For three terms in a conditional, you can have 8 different cases (`2^3`). You don't need to test every case. You have to find those cases where switching one term (A, B or C) changes the RESULT. You take those cases and write tests for them. You can ignore the rest as they don't bring you any new information. For our example these could be the test cases `1, 2, 3, 4`. I marked them with an `x`,

The general rule of thumb is that you can solve this with `n + 1` test cases where `n` is the number of terms.

This technique is called **Modified Condition/Decision Coverage** or short **MC/DC**. I like this name, it's easy to remember 🤘.

It gets harder to do, when one term of the conditional is used more than once (coupled). Another thing to take note of is that depending on the decision statement in the code, it may not be possible to vary the value of the coupled term such that it alone causes the decision outcome to change. You can deal with this by only testing uncoupled atomic decisions. Or you analyse every case where coupling occurs one-by-one. Then you know which ones to use.

You'll have to do this in the aerospace software industry or where you deal with safety-critical systems.

If you read this far: Congratulations. This is one of the more in-depth topics of testing software. You deserve a 👏 for learning about these things!