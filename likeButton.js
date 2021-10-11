class LikeButton {

    render() {
        let likeButtonEl = document.createElement("div");
        likeButtonEl.innerHTML = `
        <i id="likeButton" class="fa fa-thumbs-up" style="color:black"></i>
        
        `
        likeButtonEl.querySelector('#likeButton').onclick = () => this.changeColor();
        return likeButtonEl;
    }

    changeColor() {
        let thumbColor = document.querySelector('#likeButton');
        if (thumbColor.style.color == 'black') {
            thumbColor.style.color = 'blue'
        } else {
            thumbColor.style.color = 'black'
        }
    }

}