# FS Open Part 3 - Exercises 3.1-3.6

Here is a link to the deployed project: https://safe-basin-33971.herokuapp.com/

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
"build-copy": "npm run build && cp -r ./build ../phonebook-backend"
```

In the backend project:

- Use the built in `express.static` middleware function to serve static files (like `index.html`). It takes a `root` argument. In this case, it'll take the `build` directory.

At this point, running `npm run dev` and going to `localhost:3001` should show the frontend part of the phonebook project, and should also list phonebook entries. Adding/deleting phonebook entries works fine at this point, but updating numbers won't work yet. This is fine for now.

## Exercise 3.10

- [x] Deploy the backend to the internet. Test the deployed backend with a browser and Postman. Create a README.md at the root of your repo and add a link to the online application.

## Exercise 3.11

- [x] Generate a production build of the frontend part of the project.

To deploy this project, you'll want to:

- create a `Procfile` in the backend root
- run `heroku create` in the backend
  - make sure that your repo's remotes make sense with `git remote -v`. Note that when you run `heroku create` it should automatically set the Heroku Git repo as a remote for your local repository.
- To deploy it, use `git push heroku [main/master]`. I haven't renamed my master branch to main yet, so `git push heroku master` worked for me.

---

The following exercises deal with using MongoDB as a database.

## Exercise 3.12

- [x] Create a `mongo.js` file in the project root. In this file, you'll add functions used for adding entries to the phonebook and listing all the existing entries in the phonebook. You should be able to complete this task through the command line by passing three arguments: `password name number`

This is a pretty basic exercise to help you get started with MongoDB and Mongoose. You'll basically use Mongoose to connect to your database. Be sure that you've not hardcoded sensitive information (like your MongoDB password) into your app, so you'll want to use environment variables in this case. (Also, don't forget to gitignore your `.env` file/s).

For this exercise, you basically want to be able to fetch all phonebook entries, as well as add a new entry to the phonebook from the command line. Note that Node lets you access command line arguments with `process.argv`

For the Mongoose part of this exercise, you'll want to make a new Schema for a phonebook entry, and then create a model from the schema definition. At this point, it's rather simple, and you don't need to add any options for validation.

## Exercise 3.13

- [x] Change the fetching of all phonebook entries, so that the data is fetched from the database. Check that this works on the frontend. Just like the previous exercises, ensure that you've moved all Mongoose-specific code into a module. Of course, we'll need to import this module in `index.js` to get connected to the database and all.

Now we get back to working on the phonebook backend and frontend bits. You'll also want to move all Mongoose-related code to a separate module. In this case, I've made a directory called `models` in the backend, and I've moved the all the Mongoose-related bits to a file called `person.js`. This is where you'll be connecting to the database, creating the schema and model for a new entry, and so on.

We've used `set` to modify our data first, and this should work on all instances of the models produced with our schema. In this case, we want our `_id` property to be a string, and not an object.

In `index.js` up date the GET request to `/api/persons` with `Person.find()`. By passing `{}` as a parameter, you should be able to get a list of all documents in the phonebook collection. Similarly, you'll want to update the GET request to `/api/persons/:id`. In this case, instead of `find`, you'll want to use `findById` and pass the id as a parameter.

## Exercise 3.14

- [x] Change the backend so that new numbers are saved to the database. Again, ensure that the frontend works after these changes. At this point, the phonebook can have multiple entries for a person with the same name.

Update the POST request to `/api/persons`. A new phonebook entry object can be generated with the `Person` constructor function `new Person({})`. From here, use the `save` operation and pass the response through a callback function.

## Exercise 3.15

- [x] Change the backend so that deleting phonebook entries is reflected in the database. Verify that the frontend still works after this change has been made.

Update the DELETE request to `/api/persons/:id` by using `findByIdAndRemove`. Again, pass the id as a parameter here. The `result` callback parameter can be used to check if a resource was actually deleted.

## Exercise 3.16

- [x] Move the error handling to a new error handler middleware

In a new directory, called `middleware`, I've moved both my logging and error handling to their own respective modules. After that's sorted, they can be imported into `index.js`.

## Exercise 3.17

- [x] If the user tries to create a new entry for a person whose name already exists in the phonebook, the frontend will try to update the phonenumber of the existing entry by making an HTTP PUT request to the entry's unique URL. Modify the backend so it supports this request. Make sure the frontend works.

## Exercise 3.18

- [x] Update the `api/persons/:id` and `info` routes to use the database, and verify that they work directly with the browser and Postman.

For the `info` route, I've opted to use the `countDocuments` function to get the number of entries in the phonebook collection. The return value is a promise and not a number, so I've opted to use async/await for this to resolve said promise.

## Exercise 3.19

- [x] Expand the validation so that the name stored in the database is at least three characters long. You'll need to work on the frontend so it displays some sort of error message when a validation error occurs. Use `catch` blocks to implement error handling accordingly.

In `person.js`, you'll want to update your schema definition with validation rules. The rules for the `name` property are as follows:

1. It must be a `String` type
2. You need to input a name (hence, `required: true`)
3. The name must be at least 3 letters long.

I've also added custom error messages for the `required` and `minLength` validation rules.

## Exercise 3.20

- [x] Add validation to your phonebook application. Make sure that phone numbers are of the correct form (you'll use a custom validator for this). A phone number must be:
  - length of 8 or more
  - consists of two parts separated by '-' like: 09-123456 or 040-123456. Numbers like 1234456 or 1-2324456 are invalid.

**Additional Note:** If an HTTP POST request tries to add a name that is already in the phonebook, the server must respond with an appropriate status code and error message.

For the phone number field, we'll be taking in `String` type values. The exercise also requires this field to meet a couple other restrictions - a minimum length of 8 and a specific pattern for the number.

The minimum length can easily be validated with `minLength`, but for the pattern, we've gone with a custom validator. To do this, pass a validation function. If the validator function returns falsy (except `undefined`) or throws an error, validation will fail. You can also pass a custom error message. In our case, we'll use the `test` method to see if the value matches a specific pattern.

## Exercise 3.21

- [x] Generate a new full stack version of the application.

  - Create a new production build of the frontend and copy it to the backend.
  - Verify that everything works locally with `http://localhost:3001`. Push the latest version to Heroku and verify that everything works there as well.

  Some tips for when things go wrong when you deploy your app to Heroku:

  1. Check to see if you've added your environment vars as config vars on Heroku. You can do this through the command line, or directly through your project settings on Heroku.
  2. Check your Network Access settings on MongoDB.
  3. Check [Heroku Status](https://status.heroku.com/).

## Exercise 3.22

- [x] Add ESLint to application and fix all the warnings.

Pretty straight forward. Install ESLint on the backend and init your ESLint config with `npm init @eslint/config`. This s hould generate a config file in your backend project root. Don't forget to also create an `.eslintignore` file to ignore the `build` directory.
