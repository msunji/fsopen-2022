# FS Open 2022 - Part 2 | Phonebook
## Exercise 2.6
- [x] Implement adding a person to the phonebook
First, register an event handler to the name input with the `onChange` attribute. Pass `handleNewName` to it. `handleNewName` gets called each time the name input element changes, and `App`'s `newName` state takes on input's value.

The forms gets the `onSubmit` attribute so that new names can be added to the phonebook. We then add the event handler `addName` to the form, and this gets called when the form is submitted. It adds a new object `nameObj` with a name property that takes `newName` as a value. 

## Exercise 2.7
- [x] Prevent the user from adding names that already exist in the phonebook

In the `addName` event handler, check if the name exists before adding it to the phonebook. I went with `localeCompare` to do a case-insensitive string comparison to check if the names were the same. On form submission, users should see an alert if the name already exists. Otherwise, the name gets added to the phonebook.

## Exercise 2.8
- [ ] Expand the app by letting user add phone numbers to the phonebook

## Exercise 2.9
- [ ] Implement a search field that can be used to *filter* the list of people by name

## Exercise 2.10
- [ ] Refactor the app by extracting suitable parts into new components. It is sufficient to extract three components from the application.