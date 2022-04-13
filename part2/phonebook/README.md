# FS Open 2022 - Part 2 | Phonebook

## Exercise 2.6

- [x] Implement adding a person to the phonebook
      First, register an event handler to the name input with the `onChange` attribute. Pass `handleNewName` to it. `handleNewName` gets called each time the name input element changes, and `App`'s `newName` state takes on input's value.

The forms gets the `onSubmit` attribute so that new names can be added to the phonebook. We then add the event handler `addName` to the form, and this gets called when the form is submitted. It adds a new object `nameObj` with a name property that takes `newName` as a value.

## Exercise 2.7

- [x] Prevent the user from adding names that already exist in the phonebook

In the `addName` event handler, check if the name exists before adding it to the phonebook. I went with `localeCompare` to do a case-insensitive string comparison to check if the names were the same. On form submission, users should see an alert if the name already exists. Otherwise, the name gets added to the phonebook.

## Exercise 2.8

- [x] Expand the app by letting user add phone numbers to the phonebook

Add a new input that takes numbers. The process is similar to that of Exercise 2.6. No validation at this point.

## Exercise 2.9

- [x] Implement a search field that can be used to filter the list of people by name

The filter input is given an event handler that triggers every time the input changes. `filter` takes on the filter input's value.

We then filter through the `persons` array, checking to see if the `filter` hits any matches. We'll use the `includes()` method to get this done, but since it's case-sensitive, we'll first need to transform both the name and filter values to all lowercase letters with `toLowerCase()`. Once that's done, we map through the filtered array.

## Exercise 2.10

- [x] Refactor the app by extracting suitable parts into new components. It is sufficient to extract three components from the application.

I moved the filter, the form, and the list of people in the phonebook to their own components in the `components` directory.

## Exercise 2.11

- [x] Get `json-server` running on Port 3001. Ensure that the server returns the list of people on `localhost:3001/persons`. Fetch data from the server with `axios` with an effect hook.

## Exercise 2.12

- [x] In a new app, get country data from <a href="https://restcountries.com">this site</a>. You'll want to get data from the `all` endpoint. The app should now function like so:

1. Type a search query in the search field
2. Show countries that match the query. If there are over 10 countries that match the query, user is prompted to make their query more specific.
3. If there are ten or less countries (but more than one), show all country names that match the query
4. However, if only one country matches the query, then show basic data related to the country (capital and area, flag, languages spoken)

---

Country data is made available through the [REST Countries API](https://restcountries.com/). Instead of pulling data on initial render, it pulls country data when the filter input gets filled in. The resulting list of countries (and their data), gets saved to a piece of state, which then gets passed to the `Countries` component.

In the `Countries` component, you'll find that the content rendered depends on the length of the `countries` array. As per instructions, a note asking for a more specific query is shown if the array contains more than 10 countries. If the array shows between 2-10 countries, a list of country names is shown.

If the `countries` array only contains exactly one country, then the app shows more detailed country data.

## Exercise 2.13

- [x] When a list of multiple countries is shown, add a button next to the name of each country that when pressed, shows the view (basic data) for that country.

A button is placed next to each country name, and allows users to show/hide country-specific data. I made a separate component for each list item, so each item could have its own piece of state for showing/hiding country data.

## Exercise 2.14

- [x] When showing the data of a single country, show the weather report for the capital of that country.

When the `countries` array contains one country, the app uses another `useEffect` hook to pull data from [OpenWeather API](https://openweathermap.org/). For a single country, additional data is shown for weather in said country's capital. This covers things like temperature, wind, and also shows a weather icon that describes current weather conditions.

A note: Be sure to indicate units when you do your API call. The standard unit is set to Kelvin, which can be a little alarming to see at first - or at least it was for me.
