import express from "express";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
];
//Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

//Get single post
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    res
      .status(404)
      .json({ msg: "A post with the id " + req.params.id + "was not found" });
  } else {
    res.status(200).json(post);
  }
});

//Create new post
router.post("/" , (req,res)=> {
    console.log(req.body);
    res.status(201).json(posts);
})

export default router;