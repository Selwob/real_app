class Comments {

    constructor (artId) {
        this.artId = artId;
    }

    render(el) {
        let currentArticle = {};
        
        for (let article of db) {
            if (article.id == this.artId) {
                currentArticle = article;
            }
        };
        
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
        
        let previousComment = currentArticle.comments || [];
        for (let comment of previousComment) {
            commentBox.querySelector("#previousComments").innerHTML += `<p>${comment}</p>`
        }
        
        submit.onclick = (ev => {
            let commentList = [];
            commentList.push.apply(commentList, currentArticle.comments);
            
            let comment = commentBox.querySelector('#commentbox').value;
            commentList.push(comment);
            
            currentArticle.comments = commentList;
            
            populateStorage();

            commentBox.querySelector('#commentbox').value = "";

            this.render(commentBox);

        });

        return commentBox;
    }
}