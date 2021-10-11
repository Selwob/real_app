class LikeButton {

    constructor (artId) {
        this.artId = artId;
    }

    render() {
        let currentArticle = {};
        for (let article of db) {
            if (article.id == this.artId) {
                currentArticle = article;
            }
        };

        let likeButtonEl = document.createElement("div");
        currentArticle.upvotes = currentArticle.upvotes || 0;
        let upvotes = currentArticle.upvotes;
        likeButtonEl.innerHTML = `
        <p>This article already has ${upvotes} upvotes!</p>
        <i id="likeButton" class="fa fa-thumbs-up" style="color:black"></i>
        `
        likeButtonEl.querySelector('#likeButton').onclick = () => this.changeColor(currentArticle);
        return likeButtonEl;
    }

    changeColor(currentArticle) {
        let thumbColor = document.querySelector('#likeButton');
        if (thumbColor.style.color == 'black') {
            thumbColor.style.color = 'blue';
            currentArticle.upvotes += 1;
        } else {
            thumbColor.style.color = 'black';
            currentArticle.upvotes -= 1;
        }

        populateStorage();

    }

}