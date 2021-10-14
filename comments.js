class Comments {

    constructor (artId) {
        this.artId = artId;
        //this.articleArray = articleArray;
    }

    render(el) {
        // let currentArticle = {}; 
        // for (let article of this.articleArray) {
        //     if (article.id == this.artId) {
        //         currentArticle = article;
        //     }
        // };
        
        let commentBox = el || document.createElement("div");
        commentBox.innerHTML =`
        <label for="commentbox">Enter your comments:</label>
        <form>
            <textarea placeholder="nice article bro" name="commentbox" id="commentbox" rows="4" cols="40"></textarea>
            <p><input type="submit" value="Submit" id="submit" /></p>
        </form>
        <div id="previousComments"></div>
        `

        
        let submit = commentBox.querySelector('#submit');
        
        // let previousComment = currentArticle.comments || [];
        let previousComment = useArticleDatabase.getComments(this.artId) || [];
        for (let comment of previousComment) {
            commentBox.querySelector("#previousComments").innerHTML += `<p>${comment}</p>`
        }
        
        submit.onclick = (ev) => {
            ev.preventDefault(); // Prevents <form> auto submit thingy

            let commentList = [];
            // commentList.push.apply(commentList, currentArticle.comments);
            commentList.push.apply(commentList, previousComment);
            
            let comment = commentBox.querySelector('#commentbox').value;
            commentList.push(comment);
            
            // currentArticle.comments = commentList;
            useArticleDatabase.setComments(this.artId, commentList);
            
            useArticleDatabase.populateStorage();

            commentBox.querySelector('#commentbox').value = "";

            this.render(commentBox);

        };

        return commentBox;
    }
}