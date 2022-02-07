import blog from './posts.js';
// const blog = require('./posts.js');

let val = blog();
// console.log(val[1].title);

const newPosts = [
  {
    id: 4,
    title: 'Post four',
    author: 'John Doe',
  },
  {
    id: 5,
    title: 'Post five',
    author: 'John Doe',
  },
];

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        if(newPost){
            val.push(newPost);
            resolve(val);
        }
        reject("post eklenemedi")
    })
}

const listPosts = (posts) => {
  return new Promise((resolve, reject) => {
      console.log("gönderiler listeleniyor...");
      if (posts) {
        val.map((post) => {
            resolve(post);
        } )
      } else {
        reject("gönderiler listelenemedi");
      }
    })
};

const fetchPost = async () => {
    try {
        // let listPost =
            await listPosts(val)
            .then((data) => {
                console.log(data)
            })

        let newPost = await addPost(newPosts);
        console.log(newPost);

        // listPost =await listPosts(true)
        // console.log(listPost)

    } catch (error) {
        console.log(error);
    }
}

fetchPost().then();