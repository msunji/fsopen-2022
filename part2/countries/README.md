# FS Open 2022 - Part 2 | Countries

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
