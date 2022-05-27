# Full Stack Open 2022 - Part 4 Exercises

---

## Exercise 4.1

- [x] Turn the example application into a functioning `npm` project. Execute your application with `nodemon`. Verify that you can add blogs to list with Postman and that the application returns the added blogs at the correct endpoint.

## Exercise 4.2

- [x] Refactor the application into separate modules.

---

The following exercises cover unit testing. For testing, I've used [Jest](https://jestjs.io/).

## Exercise 4.3

- [x] Define a `dummy` function that receives an array of blog posts as a param and always returns the value 1. Test.

## Exercise 4.4

- [x] Define a new `totalLikes` function that receives a list of blog posts as a parameter. The function should return the total sum of likes in all of the blog posts.

## Exercise 4.5

- [x] Define a new `favoriteBlog` function that receives a list of blogs as a param. The function returns the blog with the most likes. If there are multiple top favourites, it is sufficient to return one of them. The value returned can be in a format like this:

```js
{
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  likes: 12
}
```

## Exercise 4.6

_Exercises 4.6 and 4.7 make use of the Lodash library_

- [ ] Define a function named `mostBlogs`. It receives an array of blogs as a param, and the function returns the _author_ with the _most_ blog entries in the list, and the total number of blog entries. If there are multiple authors, it's fine to return any one of them.

## Exercise 4.7

- [ ] Define a function called `mostBlogs` that receives an array of blogs as a parameter. The function returns whose blog posts have the most likes (in total). The return value should also contain the total number of likes. Again, if there are multiple bloggers, it's fine to return just one.

---

The following exercises cover integration testing with APIs and databases.

For these exercises, I deviated a bit from the examples provided. Instead of making a mock database on Mongo Atlas, I opted to try using [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server) instead. Admittedly, it took me a bit of some time to really wrap my head around testing and TTD, so this was a bit of a challenge for me to do.

## Exercise 4.8

- [x] Using supertest, write a test that makes an HTTP GET request to `/api/blogs`. Verify that the application returns the correct amount of blog posts in JSON format. Once the test is finished, refactor the route handler to use async/await instead of promises.

## Exercise 4.9

- [x] Write a test that verifies the unique identifier property of the blog posts is named _id_.

## Exercise 4.10

- [x] Write a test that verifies that making an HTTP POST request to `/api/blogs` successfully creates a new blog post. And then verify that the total number of blog entries in the system is increased by one. You can also verify that the content of the blog entry is saved correctly to the database. Once completed, refactor the operation to use async/await instead of promises.

## Exercise 4.11

- [x] Write a test that verifies that if the _likes_ property is missing from the request, then it defaults to 0. Do not test the other properties just yet.

## Exercise 4.12

- [x] Write a test related to creating new blogs via the `/api/blogs` endpoint that verifies that if the _title_ and _url_ properties are missing from the request data, then the backend responds to the request with the status code _400 Bad Request_.

## Exercise 4.13

- [x] Implement a function to delete a single blog post resource. For this, use async/await syntax and follow RESTful conventions when defining the HTTP API. Implement tests for the functionality.

## Exercise 4.14

- [x] Implement functionality for updating the information (the number of likes in particular) of an individual blog post. Use async/await. Implement tests for the functionality.
