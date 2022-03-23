# FS Open 2022 - Part 2 | Course Info

## Exercise 2.1

The content of the `App` component changes.

- [x] Define a component responsible for formatting a _single_ course called `Course`.

The component structure can be something like this:

```
App
  Course
    Header
    Content
      Part
      Part
      ...
```

This application must work regardless of the number of **parts** a course has. Make sure the console doesn't show any errors.

At this point, we're given `course`, which is an object. The `parts` property is an array, so you can map through it and render the part's name and the number of exercises easily.

## Exercise 2.2

- [x] Show the sum of all the exercises in the course

I used the `reduce` method to do this. Like so:

```js
let sumExercises = parts.reduce((prev, current) => prev + current.exercises, 0);
```

- The initial value is set to zero, so when the callback function gets called, we start with these values: `prev = 0` and `current = { exercises: 3}`. This should return a value of 3. Then `prev = 3` and `current = {exercises: 7}`. This should return a value of 10 (which is the sum of the number of exercises in the Node.js course).

## Exercise 2.3

- [x] If you haven't done it yet, do Ex 2.2, but this time, with the `reduce` method.

## Exercise 2.4

- [x] Extend the app so it can take in an arbitrary number of **courses**

`course` changes into an array of objects. So in the `App` component, we map through the `courses` array and render the `Course` component for each course. Each `Course` component must be assigned a key.

## Exercise 2.5

- [x] Declare the `Course` component as a separate module which you'll import into the `App` component. All subcomponents of `Course` can be included in the same module.

I've made separate components for `Course` and `Content`. `Course` gets imported into the `App` component. On the other hand, `Content` gets imported into `Course` and renders the name of each course part, the number of exercises per part, and the total number of exercises for that course.
