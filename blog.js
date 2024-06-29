const blogPosts = [];

function displayPosts() {
    const postHTML = blogPosts.map((post) => {
        return `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            </div>
        `;
    }).join("");
    document.getElementById("blog-posts").innerHTML = postHTML;
}

function submitPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const post = { title, content };
blogPosts.push(post);
    displayPosts();
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

document.getElementById("submit").addEventListener("click", submitPost);

displayPosts();
