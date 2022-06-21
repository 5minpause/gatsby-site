---
layout: post
title: "Inspecting changes locally before pushing"
categories: article
date: 2019-03-21
---


If you work on your branch you run into the situation that you would like to push your changes to the remote repository. CI will then pick up your changes and run the linting and code quality checks on it. Afterwards, you will see whether you improved the quality. But perhaps there are some new violations that crept into the code? Happens to all of us!

I usually like to see and check if any new issues might come up on CI. This lets me improve them before I push.
The checks I run locally depend on the kind of work that I do. Lately that's a lot of Ruby on Rails again — which is great. I love that framework and the language.
To grade my code, I use Rubocop, Reek and Flay. If you run their respective commands on your repository, they will check the whole code base. This might be ok, if you didn't have any issues before. Since I join teams, these days, that work on legacy projects it is rare that there are no problems with the code. If I run the commands just so, I will get a long list and couldn't possibly see the issues that I introduced through my changes. Lucikly, there is Git and some "command line foo" that can help us here:

`git fetch && git diff-tree -r --no-commit-id --name-only master@\{u\} head | xargs ls -1 2>/dev/null | grep '\.rb$' | xargs rubocop`

This command will fetch the current state from the remote and diff your branch/changes to master branch. It then runs `rubocop` on these changes.
In my `~/.aliases.local` file I added three lines for all three linters.

```bash
# Code Quality
alias rubocop-changes="git fetch && git diff-tree -r --no-commit-id --name-only master@\{u\} head | xargs ls -1 2>/dev/null | grep '\.rb$' | xargs rubocop"
alias reek-changes="git fetch && git diff-tree -r --no-commit-id --name-only master@\{u\} head | xargs ls -1 2>/dev/null | grep '\.rb$' | xargs reek"
alias flay-changes="git fetch && git diff-tree -r --no-commit-id --name-only master@\{u\} head | xargs ls -1 2>/dev/null | grep '\.rb$' | xargs flay"

```

I am still working on a way to just call one command and have all thee commands run. That doesn't yet work. Probably because of exit-code reasons, when one linter finds issues.

These simple commands offer a convenient way to find local issues and correct them before pushing to CI.