# FS Open Part 3 - Exercises 3.1-3.6

Here is a link to the deployed project: https://dry-lake-27756.herokuapp.com/

## Exercise 3.1

- [x] Implement a Node app that returns a hardcoded list of phonebook entries from the address `http://localhost:3001/api/persons`.

Make a GET request to the route `/api/persons`. Pass the `persons` array defined in `index.js` to `res.json()` to send a JSON response.

## Exercise 3.2

- [x] Implement a page at the address `http://localhost:3001/info` with information about: how many entries exist in the phonebook array and the time the request was received.

Make a GET request to the route `/info`. You'll want to also get: the length of the `persons` array (`persons.length`) and the time the request was made (generated with a new `Date` object). You can then pass this info and some pretty simple HTML to `res.send()`.

## Exercise 3.3

- [x] Implement functionality for displaying phonebook info for a single entry. Use id as the parameter.

Make a GET request to `/api/persons/:id`. Note that the id parameter is a string, so it'll have to converted to a number first. After which, you can use the `find()` method to get the phonebook entry with the same id. Use `res.json()` to send this data as a JSON response.

## Exercise 3.4

- [x] Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to said entry's URL.

Make a DELETE request to `/api/persons/:id`, where id refers to the id of the entry you want to delete. Again, much like in Exercise 3.3, you'll need to convert the id parameter from the request object into a number first. If the process is successful, then respond to the request with the status code `204` (no content) and don't return any data with the response.

## Exercise 3.5

- [x] Expand the backend so new phonebook entries can be added thru HTTP POST requests to the address `http://localhost:3001/api/persons`. Generate a new id for the phonebook entry with the `Math.random` function.

First, don't forget to use the `json-parser` middleware to deal with the request body. Then, make a POST request to `/api/persons`. Get the response body and pass it to `res.json()`.

## Exercise 3.6

- [x] Implement error handling for creating new entries. A request won't be allowed to succeed if:

1. The name or number is missing
2. The name already exists in the phonebook

Test to see if either the name or number is missing with `!person.name || !person.number`. Should this return true, return an arror. Likewise, if the entry to be added already exists (in this case, we'll use `some()` to see if the entry already exists based on the person's name), then return an error.

## Exercise 3.7

- [x] Add `morgan` to your app for logging. Configure it so it logs messages to the console based on the `tiny` config.

Install `morgan`, then import it into your app. To use it as middleware to log messages with the `tiny` config: `app.use(morgan('tiny'))`

## Exercise 3.8

- [x] Configure `morgan` so that it shows the data sent in HTTP POST requests. Solutions to consider: creating new tokens, `JSON.stringify()`

`morgan()` can take two arguments: `format` and `options`. In this case, we want to set a specific format for the information that gets logged to the console. The format

First, we'll define a token with `morgan.token()`. This function takes a name (we'll use `person` in this example) and a callback function that returns the request body in JSON format.

With this, we can then add this custom token to the other tokens we've set in `morgan()`. We end up with something that looks a bit like this:

```js
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :person'
  )
);
```

## Exercise 3.9

- [x] Make the backend part work with the frontend part of this project. You don't need to implement the functionality to make changes to phone numbers at this point.

Key points here:

- In the frontend part, change the `baseUrl` (the API endpoint) to `/api/persons`
- Generate your `build` directory first in the frontend project with `npm run build`, then when done, copy it to the backend project root.

I made a really simply npm script for this:

```
"build-copy": "npm run build && cp -r ./build ../phonebook-backend/client"
```

In this case, it gets copied over to the backend project as 'client'. Knowing that, we can move on to the next steps.

In the backend project:

- Use the built in `express.static` middleware function to serve static files (like `index.html`). It takes a `root` argument. In this case, it'll take the `client` directory.

At this point, running `npm run dev` and going to `localhost:3001` should show the frontend part of the phonebook project, and should also list phonebook entries. Adding/deleting phonebook entries works fine at this point, but updating numbers won't work yet. This is fine for now.

## Exercise 3.10

- [x] Deploy the backend to the internet. Test the deployed backenf with a browser and Postman. Create a README.md at the root of your repo and add a link to the online application.

## Exercise 3.11

- [ ] Generate a production build of the frontend part of the project.
