const runner = async (src, id, t) => {
  console.log("loading");

  setTimeout(() => {
    fetch(src, {
      method: "POST",
      body: JSON.stringify({
        title: "title",
        body: "pawar",
        userId: `${id}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, 4000);

  setTimeout(() => {
    fetch(src, {
      method: "POST",
      body: JSON.stringify({
        title: `${t}`,
        body: "pawar",
        userId: `${id}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, 4000);
};

const expo = async () => {
  let id = 1000;
  let t = "shubh";
  await runner("https://jsonplaceholder.typicode.com/posts", id, t);
};
expo();
