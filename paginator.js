class Paginator {
    
    currentPage = 1;
    numberPerPage = 5;
    numberOfPages = 1;
    

    constructor (numberOfObjects, numberPerPage, onPageChange){
        this.numberOfObjects = numberOfObjects;
        this.numberOfPages = Math.ceil(numberOfObjects / numberPerPage);
        this.numberPerPage = numberPerPage;
        this.onPageChange = onPageChange;
    }

    getOffset() {
        let firstItemIndex = this.numberPerPage * (this.currentPage - 1);
        return firstItemIndex;
    }

    nextPage(el) {
        this.currentPage += 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.render(el);
    }

    previousPage(el) {
        this.currentPage -= 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.render(el);
    }
    
    firstPage(el) {
        this.currentPage = 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.render(el);
    }

    lastPage(el) {
        this.currentPage = this.numberOfPages;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.render(el);
    }

    render(el) {
        el = el || document.createElement("div");
        el.innerHTML = `
        <div id="outer">
        <div id="inner"; style="position: relative; left: 300px;">
            <input type="button" class="navButton" id="first" value="first" />
            <input type="button" class="navButton" id="previous" value="previous" />
            <input type="button" class="navButton" id="next" value="next" />
            <input type="button" class="navButton" id="last" value="last" />
        </div>
        </div>`
        el.querySelector('#first').onclick = () => this.firstPage(el);
        el.querySelector('#previous').onclick = () => this.previousPage(el);
        el.querySelector('#next').onclick = () => this.nextPage(el);
        el.querySelector('#last').onclick = () => this.lastPage(el);

        el.querySelector("#first").disabled = this.currentPage == 1 ? true : false;
        el.querySelector("#previous").disabled = this.currentPage == 1 ? true : false;
        el.querySelector("#next").disabled = this.currentPage == this.numberOfPages ? true : false;
        el.querySelector("#last").disabled = this.currentPage == this.numberOfPages ? true : false;
        
        return el;
        
    }

}