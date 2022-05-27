# FS Open 2022 - Part 1 | Unicafe

## Exercise 1.6

- [x] Implement an app that collects customer feedback - good, neutral, bad. No need to save to localStorage or anything at this point. You'll need to display the total number of feedback collected for each category.

## Exercise 1.7

- [x] Add more statistics: total number of collected feedback, average score, percentage of positive feedback

## Exercise 1.8

- [x] Refactor the application so that statistics are extracted into another component.

I moved the calculations for the total (all), average score (average) and percentage of positive feedback (positive) to the `Statistics` component. The component then takes values for `good`, `neutral` and `bad` as props.

## Exercise 1.9

- [x] Make it so that the app ONLY shows feedback once it's been gathered.

Within the `Statistics` component, using the JS ternary operator, show _No feedback given_ if the `totalFeedback` has a value of zero (no feedback received), otherwise show the values for each statistic.

## Exercise 1.10

- [x] We continue refactoring the app by extracting the following two components: `Button` for defining the feedback buttons and `StatisticLine` for displaying a _single_ statistic

The `Button` component takes two props: `handleClick` (for the event handler function) and `text` for the button text.

Similarly, the `StatisticLine` component also takes two props -- `text` and `value`.

## Exercise 1.11

- [x] Display statistics in an HTML table

Change the `div` element containing each statistic into a `table`. The `StatisticLine` component is modified to return a `tr` element instead of a `p` element.
