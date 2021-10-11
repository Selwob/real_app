class DislikeButton {

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

        let dislikeButtonEl = document.createElement("div");
        dislikeButtonEl.innerHTML = `
        <i id="dislikeButton" class="fa fa-thumbs-down" style="color:black"></i>
        `
        dislikeButtonEl.querySelector('#dislikeButton').onclick = () => this.changeColor(currentArticle);
        return dislikeButtonEl;
    }

    changeColor(currentArticle) {
        let thumbColor = document.querySelector('#dislikeButton');
        if (thumbColor.style.color == 'black') {
            thumbColor.style.color = 'blue';
            currentArticle.upvotes = currentArticle.upvotes || 0;
            currentArticle.upvotes -= 1;
        } else {
            thumbColor.style.color = 'black';
            currentArticle.upvotes = currentArticle.upvotes || 0;
            currentArticle.upvotes += 1;
        }
    }

}