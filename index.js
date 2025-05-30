const blogPostsContainer = document.querySelector("#blog-posts");

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        posts.slice(0, 9).forEach(post => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-6 col-lg-4 mb-4";

            col.innerHTML = `
                <div class="card blog-card" style="width: 100%;">
                    <article class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Post ID: ${post.id}</h6>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </article>
                </div>
            `;

            blogPostsContainer.appendChild(col);
        });
    } catch (err) {
        console.log(err);
    }
};

fetchData();
