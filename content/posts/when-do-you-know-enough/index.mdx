---
layout: post
title: "When do you know enough?"
categories: "newsletter"
date: 2018-08-01 15:00:00 +0200
---
> “When did you reach the point where you didn't need to read another research report, didn't need to absorb another scouting analysis, didn't need to stop by the bookstore… because it simply wasn't useful or efficient to learn another thing about your field?”

This question was posed by Seth Godin. Seth is big in marketing and entrepreneurship. Perhaps you already know him.  

This question is a deep one.
<!--more-->
As I already told you, I am an Architect personality. One of my traits is the constant urge to improve, to learn more and to get better. So my impulsive answer to this question is "never". This is only half the truth though. Of course it reads better if I tell you that I never stop learning. But it would be a lie.

I've worked as a professional software developer for over 10 years now. I started as a novice, not even junior level, developer. I learned and evolved into a senior and now I am at a level where I can work as an independent consultant with my clients.  
I thought about going back to university to get a Master's degree. But I do not want to. I believe the trade-offs are not worth it for me.
I am glad I do not need to sit somewhere anymore and learn or absorb some knowledge from someone.

That said, just yesterday I had to research something with testing async functions in my Redux action creators. I use fetch for querying the API, and wanted to test the action creator that dispatches the other actions.

(This is the code I wanted to test, but simplified)

	export const fetchApiData = (productId, params = {}) => {
	  return (dispatch) => {
		dispatch(requestApiData(productId))
		const url = `/api/v2/products/${productId}`

		return fetch(url, { credentials: 'include' })
		  .then(response => response.json())
		  .then((json) => {
			dispatch(requestApiDataSuccess(productId, json))
		  })
		  .catch((error) => {
			dispatch(requestApiDataFailure(productId, error))
		  })
	  }
	}


The test was supposed to make sure, that the correct action was dispatched on success and on failure. _But I have to admit I couldn't do it._ I spent around 2 hours trying to use the library `fetch-mock` like in their [example](https://redux.js.org/recipes/writingtests#async-action-creators). But my BabelJS setup wasn't able to transpile  the code. So `async` and `await` always produced syntax errors. Node v6 just can't handle them properly.
I tried different plugins and presets for Babel always without success. If Google offers it as a solution and if StackOverflow says to try it like that, I did…
In the end I postponed this and will try to debug it with a colleague once he comes back from vacations. I read, I learned, I tinkered, I tried. But with no success. Just a lot of frustrations.

So to answer to initial question: In our field we never really stop learning. We might pause for weeks or perhaps sometimes months at a time, where we just use our knowledge to create things. But in the end there will always be problems and tasks where we must learn something new.

That's one to the things I love about my work. Do you have similar experiences?

Holger

PS: If you happen to know a solution for my Redux problem or have sample code that I can adjust, please don't hesitate to share it. 😉
