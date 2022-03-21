# FS Open 2022 - Part 1 | Course Info

## Exercises 1.1-1.2

- [x] You'll need to refactor the code so that it consists of three new components: `Header`, `Content`, and `Total`.

This is pretty straightforward. I opted to pass the exercises as an array, and the parts and exercises as an array of objects.

- [x] Then refactor the `Content` component so that it only renders three `Part` components

Likewise, pretty straightforward. Make a new `Part` component, to which you pass `parts` and `exercises` as props. Map through the array of objects which you've passed to the `Content` component.

---

## Exercises 1.3-1.5

- [x] Modify var definitions and refactor the application accordingly

In this iteration, each `part` is an object with values for the course name and number of exercises. Like so:

```
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
```

I passed all parts as an array of objects, like so: `<Total parts={[part1, part2, part3]} />`. A notable change is use of the `reduce` method to get the sum of exercises from the array of objects passed to the `Total` component from: `{exercises.reduce((prev, current) => prev + current, 0)}` to: `{parts.reduce((acc, obj) => acc + obj.exercises, 0)}`

- [x] Place the objects into an array, modify and refactor accordingly

In this iteration, the `parts` variable gets changed into an array of objects. Since I had already passed the part objects as an array of objects, there weren't too many drastic changes to be made other than changing props like `[part1, ..., part3]` to `parts`.

- [x] Change the course and its parts into a single JS object. Refactor accordingly.

In this iteration, the course and its parts are put into one single JS object. To refactor this, I've changed the props passed to each component.
