class Post {
    constructor({title, body, photoURL}) {
        // TODO: validate that arguments aren't undefined
        this.title = title;
        this.body = body;
        this.photoURL = photoURL;
    }
    
    draw(context) {
        context.innerHTML += `
            <div class="post">
                <h1>${this.title}</h1>
                <p>${this.body}</p>
                <img src=${this.photoURL} />
            </div>
        `;
    }
}