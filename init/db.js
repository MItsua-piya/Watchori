const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

const Anime = require("../models/Anime");

const animeData = [
  {
    title: "Attack on Titan",
    image:
      "https://cdn.anipixcdn.co/thumbnail/6ecee9c863a73e2c3ba55b5fc99b1fed.jpg",
    description:
      "Humanity lives behind giant walls to survive man-eating Titans. Eren Yeager vows to destroy them after a devastating attack changes his life.",
    status: "completed",
    rating: 9,
  },
  {
    title: "Death Note",
    image:
      "https://cdn.anipixcdn.co/thumbnail/072b030ba126b2f4b2374f342be9ed44.jpg",
    description:
      "A student finds a notebook that kills anyone whose name is written in it, and a brilliant detective known as L sets out to stop him.",
    status: "completed",
    rating: 9,
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    image:
      "https://cdn.anipixcdn.co/thumbnail/b994697479c5716eda77e8e9713e5f0f.jpg",
    description:
      "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemy ritual.",
    status: "completed",
    rating: 9.1,
  },
  {
    title: "One Piece",
    image:
      "https://cdn.anipixcdn.co/thumbnail/8849f0a976aa5332853e848655a1d28f.jpg",
    description:
      "Monkey D. Luffy and his Straw Hat crew sail the Grand Line in search of the legendary treasure known as the One Piece.",
    status: "ongoing",
    rating: 8.7,
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    image:
      "https://cdn.anipixcdn.co/thumbnail/b0b1d24f68e3d6a9f855e424c4f0c9b6.jpg",
    description:
      "Tanjiro Kamado becomes a demon slayer to cure his sister Nezuko, who was turned into a demon.",
    status: "completed",
    rating: 8.5,
  },
  {
    title: "Jujutsu Kaisen",
    image:
      "https://cdn.anipixcdn.co/thumbnail/2babf18a3e44fc9fbd14151d2caa8c91.jpg",
    description:
      "Yuji Itadori swallows a cursed finger and joins a school of sorcerers to fight deadly curses.",
    status: "ongoing",
    rating: 8.6,
  },
  {
    title: "Steins;Gate",
    image:
      "https://cdn.anipixcdn.co/thumbnail/812b4ba287f5ee0bc9d43bbf5bbe87fb.jpg",
    description:
      "A self-proclaimed mad scientist accidentally discovers a way to send messages to the past and faces the consequences of changing time.",
    status: "completed",
    rating: 9.1,
  },
  {
    title: "Cowboy Bebop",
    image:
      "https://cdn.anipixcdn.co/thumbnail/752d25a1f8dbfb2d656bac3094bfb81c.jpg",
    description:
      "A crew of bounty hunters travels the solar system chasing criminals while dealing with their own haunted pasts.",
    status: "plan to watch",
    rating: 8.8,
  },
  {
    title: "Vinland Saga",
    image:
      "https://cdn.anipixcdn.co/thumbnail/d645920e395fedad7bbbed0eca3fe2e0.jpg",
    description:
      "Thorfinn, a young Viking, seeks revenge on the man who killed his father and slowly discovers what a true warrior is.",
    status: "plan to watch",
    rating: 8.7,
  },
  {
    title: "Hunter x Hunter (2011)",
    image:
      "https://cdn.anipixcdn.co/thumbnail/c81e728d9d4c2f636f067f89cc14862c.jpg",
    description:
      "Gon Freecss becomes a Hunter to find his father, meeting powerful allies and enemies along the way.",
    status: "completed",
    rating: 9.0,
  },
];

module.exports=animeData;
