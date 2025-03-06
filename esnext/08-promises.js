const handleResponse3 = (response3) => {};
const handleError3 = (error3) => {};
const handleResponse2 = (response2) => {
  $.get(url3, handleResponse3, handleError3);
};
const handleError2 = (error2) => {};
const handleResponse1 = (response1) => {
  $.get(url2, handleResponse2, handleError2);
};
const handleError1 = (error1) => {};

$.get(url1, handleResponse1, handleError1);

const sum = 2 + 3;

const responses = [null, null];
$.get(url1, (response1) => {
  responses[0] = response1;
});
$.get(url2, (response2) => {
  responses[1] = response2;
});

setTimeout(() => {
  console.log(responses);
}, 1000);

const promise = $.get(url1);
promise.then((response1) => {});
promise.catch((error1) => {});
promise.finally(() => {});

$.get(url1)
  .then((response1) => $.get(url2))
  .then((response2) => $.get(url3))
  .then((response3) => {})
  .catch((error) => {})
  .finally(() => {});

Promise.all([$.get(url1), $.get(url2)])
  .then(([response1, response2]) => {})
  .catch((error) => {});

// promise.state =
//   "pending"
//   "settled"
//     "fulfilled"/"resolved"
//     "rejected"

Promise.allSettled([$.get(url1), $.get(url2)]);

Promise.race([$.get(url1), $.get(url2)]).then((firstResponse1) => {});

const threeSecondsTimeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Three seconds have passed");
  }, 3000);
});
// .then((message) => console.log(message))
// .catch((message) => console.error(message));

Promise.race([$.get(url1), threeSecondsTimeout]).then(
  (responseOrTimeout) => {}
);

Promise.resolve(42).then((number) => console.log(number));
Promise.reject(43).then((number) => console.error(number));
