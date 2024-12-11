var myList = document.querySelector(".main-list");

let getPosts = async () => {
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/posts"
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Oh ohhh");
  }
};

let posts = getPosts();
posts.then((posts) => {
  posts.map((post) => {
    let listItem = document.createElement("li");
    let title = document.createElement("h4");
    let body = document.createElement("p");
    title.innerText = post.title;
    body.innerText = post.body;
    listItem.appendChild(title);
    listItem.appendChild(body);
    myList.appendChild(listItem);
    // console.log(post.title);
    // console.log(post.body);
  });
});

// posts.map((post) => {
//   //   let listItem = document.createElement("li");
//   //   let title = document.createElement("h4");
//   //   let body = document.createElement("p");
//   //   title.innerText = post.title;
//   console.log(post.title);
// });
