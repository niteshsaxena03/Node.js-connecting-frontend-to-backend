import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 3,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 4,
      title: "What do you get if you cross a snowman and a vampire?",
      content: "Frostbite.",
    },
    {
      id: 5,
      title: "Why don’t skeletons fight each other?",
      content: "They don’t have the guts.",
    },
  ];

  res.send(jokes);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
