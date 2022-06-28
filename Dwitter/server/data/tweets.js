let tweets = [
  {
    id: "1",
    text: "express 화이팅",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "https://buffer.com/library/content/images/size/w1000/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
  },
  {
    id: "2",
    text: "안녕",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
    url: "https://buffer.com/library/content/images/size/w1000/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username == username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id == id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  console.log(tweets, tweet);
  if (tweet) {
    // find로 찾은 후, 찾은 객체의 값을 변경하면 원본 변경됨
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
