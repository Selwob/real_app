class LikeButton {

    constructor (artId) {
        this.artId = artId;
        this.likeButtonCurrentSessionStatusClicked = false;
        this.dislikeButtonCurrentSessionStatusClicked = false;
        // this.articleArray = articleArray;
    }

    render(el) {
        // let currentArticle = {};
        // for (let article of this.articleArray) {
        //     if (article.id == this.artId) {
        //         currentArticle = article;
        //     }
        // };

        let likeButtonEl = el || document.createElement("div");
        // currentArticle.upvotes = currentArticle.upvotes || 0;
        // let upvotes = currentArticle.upvotes;
        let upvotes = useArticleDatabase.getArticleUpvoteCount(this.artId);

        likeButtonEl.innerHTML = `
        <p>This article already has ${upvotes} upvotes!</p>
        <i id="likeButton" class="fa fa-thumbs-up" style="color:${this.likeButtonCurrentSessionStatusClicked ? 'blue' : 'black'}"></i>
        <i id="dislikeButton" class="fa fa-thumbs-down" style="color:${this.dislikeButtonCurrentSessionStatusClicked ? 'blue' : 'black'}"></i>
        `
        likeButtonEl.querySelector('#likeButton').onclick = () => this.changeColorLike(likeButtonEl, 1);
        likeButtonEl.querySelector('#dislikeButton').onclick = () => this.changeColorLike(likeButtonEl, -1);
        
        return likeButtonEl;
    }
    
    changeColorLike(likeButtonEl, aVote) {
        if (aVote == 1) {
            this.likeButtonCurrentSessionStatusClicked = true;
        } else if (aVote == -1) {
            this.dislikeButtonCurrentSessionStatusClicked = true;
        }

        useArticleDatabase.vote(this.artId, aVote);
        this.render(likeButtonEl);
        useArticleDatabase.populateStorage();
    }
}