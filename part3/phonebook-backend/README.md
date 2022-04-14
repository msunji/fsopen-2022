# FS Open Part 3 - Exercises 3.1-3.6

## Exercise 3.1

- [x] Implement a Node app that returns a hardcoded list of phonebook entries from the address `http://localhost:3001/api/persons`.

## Exercise 3.2

- [x] Implement a page at the address `http://localhost:3001/info` with information about: how many entries exist in the phonebook array and the time the request was received.

## Exercise 3.3

- [x] Implement functionality for displaying phonebook info for a single entry. Use id as the parameter.

## Exercise 3.4

- [x] Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to said entry's URL.

## Exercise 3.5

- [x] Expand the backend so new phonebook entries can be added thru HTTP POST requests to the address `http://localhost:3001/api/persons`. Generate a new id for the phonebook entry with the `Math.random` function.

## Exercise 3.6

- [x] Implement error handling for creating new entries. A request won't be allowed to succeed if:

1. The name or number is missing
2. The name already exists in the phonebook
