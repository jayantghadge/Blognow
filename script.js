const firebaseConfig = {
  apiKey: "AIzaSyATIoN5oV1iO7oc3Jm7Ep2zHucydF8yt6I",
  authDomain: "blognow-49f3c.firebaseapp.com",
  databaseURL: "https://blognow-49f3c-default-rtdb.firebaseio.com",
  projectId: "blognow-49f3c",
  storageBucket: "blognow-49f3c.appspot.com",
  messagingSenderId: "853603491148",
  appId: "1:853603491148:web:43b332811ab52ab5d983e9"
};

const node = document.querySelector('.node');
const blogContent = document.querySelector('#blog-content');
const blogHeading = document.querySelector('#blog-heading');
const blogSt = document.querySelector('#blog-st');
const backBtn = document.querySelector('#back-btn');
const bt = document.querySelectorAll('.blog-title');
const blogSection = document.querySelector('#blog-section');
const selectBlog = document.querySelectorAll('.card');
const selectImg = document.querySelectorAll('.blog-img');
const featuredBlogs=document.querySelector('#featured-blog')

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
start();

function start() {
  for (let i = 0; i < selectBlog.length; i++) {
    selectBlog[i].addEventListener("click", () => {
      featuredBlogs.classList.add("hidden");
      blogSection.classList.add("hidden");
      displayBlog(i);
    })
  }
}
  function displayBlog(i) {
    let firebaseRef = firebase.database().ref('Database');
    firebaseRef.on("value", function (snapshot) {
      let data = snapshot.val();
      text = Object.values(data)[i];
      blogContent.innerText = text.replaceAll("\\\\n", "\n");
    })
    blogSt.classList.remove("hidden");
    blogContent.classList.remove("hidden");
    node.src = `img/${i}.png`;
    node.style.width = "700px";
    blogHeading.innerText = bt[i].innerText;
    blogHeading.classList.remove("hidden");
    blogSt.classList.remove("hidden");
    reset(node);
  }

function reset(node) {
  backBtn.addEventListener("click", () => {
    blogSt.classList.add('hidden');
    featuredBlogs.classList.remove('hidden');
    blogSection.classList.remove('hidden');
    blogContent.innerText = "";
    node.src = "";
    window.scrollTo(0,0);
    start();
  })
}

