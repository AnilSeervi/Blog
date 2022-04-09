---
title: Understanding Higher Order Functions in JavaScript
date: "2021-12-04T15:22:02.000Z"
description: What are Higher Order Functions? Learn with Examples.
ogThumb: ./og-thumb.png
---

In JavaScript, functions are _values_(**first-class citizens**). This means that they can be assigned to a variable and/or be passed as arguments and can also be returned from another function.

These features or abilities open the door for various types of functions like, _First-class functions_, _Callback functions_, _Higher-order functions_, _Anonymous functions_ and more.

```js{7}
const numbs = [2, 4, 5, 7, 1]

// First-class and Anonymous function
const incr = n => console.log(n + 1)

// Higher-Order function with Callback function
numbs.forEach(incr)
// 3
// 5
// 6
// 8
// 2
```

Having a clear and better understanding of how **Higher-Order Array functions** work can save you a lot of time and make your logical implementation seamless.

## 🤔 What actually is an Higher-Order Function?

An **Higher-Order Function** is a function that will at least :

- take one or more functions as arguments
- returns a function as its result

The function that is passed as an argument to the higher-order function is known as a **Callback Function**, because is it, to be 'called-back' by the higher-order function at a later time.

> The term _Callback Function_ keeps popping up often in JavaScript World, so it is crucial that you understand it!

---

### Examples

Let's look at a simple example :

```js{10,11,12}
const success = s => console.log(s, ": Success") // log success message
const error = s => console.error(s, ": Error") // log error message

const notify = (status, cb) => {
  // Higher-Order Function
  const message = "Notification was " + status
  cb(message) // callback call
}

notify("Sent", success) // Notification was Sent : Success
notify("Not Sent", error) // Notification was Not Sent : Error
notify("Sent, but didn't reach", error) // Notification was Sent, but didn't reach : Error
```

Above is an example to notify success and error notification messages.

The function `notify()` is an _higher-order function_ because it takes a _callback function_ as its second argument.
The two functions `success()` and `error()` are used as callbacks for various status messages.

You can notice that when we call the `notify()` function, we are passing the respective callback function, which will be called-back later within the higher-order function.

> Note: Callbacks in JavaScript are often referred to as `cb` in parameters.

---

Now Let's look at a simpler implementation of the `forEach()` Array method, which will perform the callback on each element of the array we pass.

```js{11,12}
const numbs = [5, 9, 10, 1] // Array of numbers

const addTwo = (n, i, arr) => {
  arr[i] = n + 2 // add 2 to current iteration element
}

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) cb(arr[i], i, numbs) // callback call with: current element, index and array itself.
}

forEach(numbs, addTwo) // adds 2 to every element in numbs array
forEach(numbs, n => console.log(n)) // arrow function as callback: logs all the elements
// 7
// 11
// 12
// 3
```

In the above example we've built our own simpler version of the `Array.forEach()` method that performs a certain operation specified by the callback for every element in the Array.

At every iteration we pass the current value, current index and the array that's being operated, into the callback.

When we call the `forEach()` for the first time with the _callback function_ `addTwo()`, it adds 2 to the current iteration element and stores it back in the array.

At the second call of our `forEach()` _higher-order function_, we've directly defined an arrow function(`() => {}`) into the argument as the callback function; which just logs the current iteration element.

This ought to give you a basic understanding of what _higher-order functions_ and _callback functions_ are.

Thank you for reading my blog. Let's connect on [Twitter!](https://twitter.com/linASeervi)
