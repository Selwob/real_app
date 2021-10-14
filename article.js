class Article {
    
    constructor(article, onBackClick, onEditClick) {
        this.article = article;
        this.onBackClick = onBackClick;
        this.onEditClickLocal = onEditClick;
    }
    
    // Render an individual article
    render() {
        let detailEl = document.createElement('p');
        detailEl.innerHTML = `
        <h2>Article #${this.article.id} ${this.article.name}</h2>
        <p>${this.article.article}</p>
        <p>${this.article.tags}</p>
        <p><button id="edit">Edit</button></p>
        <p><button id="back">Back</button></p>
        <p><button id ="delete">Delete</button></p>
        `           
        
        detailEl.querySelector('#edit').onclick = (ev => {
            window.location.hash = this.article.id + "edit";

        })
        
        detailEl.querySelector('#back').onclick = (ev => {
            window.location.hash = "";

        })
        
        detailEl.querySelector('#delete').onclick = (ev => {
            if (confirm("Are you sure you want to delete?")) {
                useArticleDatabase.deleteArticle(this.article.id);
                window.location.hash = "";
                useArticleDatabase.populateStorage();
            } else {
                alert("I am alive!")
            };
        });

        return detailEl

    }
}