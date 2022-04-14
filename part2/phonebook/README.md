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

---

These exercises are related to Part 2d: Altering data in server.

## Exercise 2.15

- [x] Save the phonebook numbers to a backend server

I added a new phonebook entry with the `axios.post` method. It performs a POST request to the given endpoint (`localhost:3001/persons`) and adds the new person object to the database. After which, the `persons` piece of state gets updated accordingly.

## Exercise 2.16

- [x] Extract the code that handles communication with the backend to its own module.

This is pretty straight forward. In a new directory (`/src/services/`), I've moved all my HTTP requests to `phonebook.js`. This module then returns an object containing functions related to communicating with the server (adding a new person, deleting a person from the phonebook, updating an entry). With this sorted out, the module can now be imported into the `App` component.

## Exercise 2.17

- [x] Make it possible for users to delete entries from the phonebook. You can confirm the action from the user with the `window.confirm` method.

In the phonebook module, I've made a `del` function that takes `id` as a parameter. The function contains an Axios DELETE request that takes `localhost:3001/:id` as a route. To get it working in the `App` component, we use the imported `phonebook` module to use its `del` function.

To delete an entry in the phonebook, a user must first _confirm_ deletion through a dialog box (which can be done with `window.confirm`). On confirmation, we call `phonebook.del(id)`. After deletion, we call `setPersons` to update the phonebook list. In this case, we'll want it to show all entries, except the deleted entry. This can be done with a simple filter like so: `persons.filter((person) => person.id !== id)`.

## Exercise 2.18

- [x] Change the functionality so that if a number is added to an _already existing user_, the new number replaces the old number. Recommend using the `PUT` method for this. This function should show a prompt to confirm the action from the user.

First, in the `phonebook` module, I've made a function called `updatePerson` which takes the entry to be updated as a parameter. Using `axios.put()`, it takes `localhost:3001/:id` as a route (much like in the previous exercise). It then returns the response object's data property.

Now in the `App` component, we'll need to update the `addPerson` function. If the new entry added matches an existing entry's name _and_ number, then an alert box shows up indicating that the entry already exists. However, should a user add a new phonebook entry where the names match but the numbers don't, then a dialog box shows up asking for user confirmation to update the phonebook entry's number details.

If a user confirms the update, then we call `phonebook.updatePerson`. This takes an object as a parameter - a copy of the phonebook entry we want to modify, with the number property's value set to the new number. Once this is done, we'll want to update `persons` accordingly with `setPersons`.

## Exercise 2.19

- [x] Show a notification that lasts for a few seconds after a successful operation is exectued (person is added, number is changed).

I've made a `Notification` component that takes `message` (a string) and `error` (a boolean) as props. In the `App` component, I've made two new pieces of state - one for the notification message and one to indicate whether an error has come up or not. In the event of an error (in this case, we'll use the `catch` method in the event of a rejected promise), we can set `err` to true.

I've also made a function `removeMsg()` to handle removing the notification and resetting `msg` and `err`.

## Exercise 2.20

- [x] Show error messages too. In this case, try deleting one phonebook entry in one browser, and then try changing the same entry's phone number in another browser. An error message should show up, and should be appropriately styled to indicate that something's gone wrong.

This is pretty straightforward. I've used conditional class names in the `Notification` component. In this case, should the `error` prop be 'true', then add the `error` class to the component, otherwise, add the `success` class instead.

---

### A Note:

I've noticed that `json-server` doesn't really play nice if you don't include an `id` property. Initially, id values were generated by doing this: `id: persons.length + 1`, but I started running into a bit of trouble when I deleted an entry and added another entry that just so happened to have the same id value as another phonebook entry. I opted to change the id generation to `new Date().getUTCMilliseconds()` to generate more unique values and to avoid generating a new phonebook entry with the same id value as an existing one.
