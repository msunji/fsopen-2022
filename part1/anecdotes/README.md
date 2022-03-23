# FS Open 2022 - Part 1 | Anecdotes

## Exercise 1.12

- [x] Show a random anecdote when you click on a button

`setVotes` first generates a random integer within a set range - this would be the number of anecdotes in the `anecdotes` array, or simply its length. It then sets `selected` to the randomly generated integer value.

**Note:** You can generate an integer like so (this is inclusive on both bounds):

```js
let randomIndex = Math.floor(Math.random() * anecdotes.length);
```

## Exercise 1.13

- [x] Expand your app so that you can vote for the displayed anecdote

I initially started with an object for this, but realised it would look a bit cleaner to use an array for now. (The app's simple, so it works out fine.).

I created a new piece of state with a zero-filled array set as the initial value. Said array's length is the same as the `anecdotes` array, hence `Array(anecdotes.length).fill(0)`.

The `setVotes` function adds the ability to vote for the current anecdote displayed. We pass the value of `selected` as an argument.

Recalling that state shouldn't be mutated directly, we first make a copy of the `points` array with the spread operator. We then increment the element with an index equivalent to the value of `selected` by 1. From here, we can update the state with the new array.

## Exercise 1.14

- [x] Implement the final version of this app that shows the anecdote with the most number of votes. Should there be any ties, it's fine to show just one.

`const mostVotesIndex = points.indexOf(Math.max(...points));` returns the index of the element in the `points` array with the largest value.

I also added a few finishing touches. Though not specified in the exercise instructions, I found that there were a few bits that were a bit repeatitive, so I extracted them into their own components. I ended up with these components:

- `Button`: for the "vote" and "next anecdote" buttons. This takes `handleClick` and `text` as props.
- `Content`: generates a paragraph element that shows an anecdote and the number of votes it has. It takes `anecdote` and `votes` as props.
