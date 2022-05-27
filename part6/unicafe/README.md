# Full Stack Open Part 6 - Exercises

- Exercises 6.1 & 6.2 expand on the `unicafe` project from Part 1.
- Exercises 6.3-6.8 expand on the `anecdotes` project from Part 1.

## Exercises 6.1

- [ ] Implement the functionality required by the store. We'll need to save the number of each kind of feedback to the store. Implement the reducer, as well as the tests. In the tests, ensure that the reducer is an immutable function with teh `deep-freeze` library. Also ensure taht the first test passes.

## Exercises 6.2

- [ ] Implement the actual functionality of the application.

## Exercises 6.3

- [ ] Implement the functionality for voting on anecdotes. The amount of votes must be saved to a Redux-store.

## Exercises 6.4

- [ ] Implement the functionality for _adding_ new anecdtoes. The form can be uncontrolled for this exercise.

## Exercises 6.5

- [ ] Make sure the anecdotes are ordered by the number of votes.

## Exercises 6.6

- [ ] If you haven't done it yet, separate the creation of action-objects to action-creator-functions and place them in `src/reducers/anecdoteReducer.js`.

## Exercises 6.7

- [ ] Separate the creation of new anecdotes into its own component called `AnecdoteForm`. Move all logic for creating a new anecdote into this new component.

## Exercises 6.8

- [ ] Separate the rendering of the anecdote list into its own component called `AnecdoteList`. Move all logic related to voted for an anecdote to this component.
