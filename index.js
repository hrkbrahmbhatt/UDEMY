var fetch = require("node-fetch");

// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     this.output = "";
//     posts.forEach((post, index) => {
//       output += post.title;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const err = false;
//       if (!err) {
//         resolve();
//       } else {
//         reject("Error!");
//       }
//     }, 2000);
//   });
// }
// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// // async /await
// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });
//   getPosts();
// }

// init();

//Promise All

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Good Bye");
  }, 2000);
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
