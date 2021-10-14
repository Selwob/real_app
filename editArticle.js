class EditArticle {

    constructor (art) {
        this.art = art;
    }
    
    render() {
        let renderEl = document.createElement("div");

        let user_editable = ["name", "article", "tags"];
        user_editable.forEach(editable => {
            let el = document.createElement('p');
            el.innerHTML = `<input type="text" id="${editable}" value="${this.art[editable]}">`
            renderEl.append(el)
        })

        let saveButton = document.createElement('p');
        saveButton.innerHTML = "<p><button class='button' id='save'>Save</button></p>"
        renderEl.append(saveButton);
    
        let backButton = document.createElement('p');
        backButton.innerHTML = "<p><button class='button' id='back'>back</button></p>"
        renderEl.append(backButton);
        
        saveButton.querySelector('#save').onclick = (ev => {
            let newName = document.getElementById('name').value;
            let newArticle = document.getElementById('article').value;
            let newTags = document.getElementById('tags').value;
            
            let newTagsArr = newTags.split(" ");
            for (let tag in newTagsArr) {
                if (newTagsArr[tag][0] != "#") {
                    newTagsArr[tag] = "#" + newTagsArr[tag]
                }
            }
    
            this.art.name = newName
            this.art.article = newArticle
            this.art.tags = newTagsArr
            window.location.hash = this.art.id
    
            useArticleDatabase.populateStorage(useArticleDatabase);
        });
        
    
        backButton.querySelector('#back').onclick = (ev => {
                window.location.hash = this.art.id;
        })

        return renderEl;

    }    

}
