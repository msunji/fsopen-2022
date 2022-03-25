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