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

    nextPage() {
        this.currentPage += 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.check();
    }

    previousPage() {
        this.currentPage -= 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.check();
    }
    
    firstPage() {
        this.currentPage = 1;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.check();
    }

    lastPage() {
        this.currentPage = this.numberOfPages;
        let offset = this.getOffset();
        this.onPageChange(offset, offset + this.numberOfPages);
        this.check();
    }
     
    check() {
        document.getElementById("first").disabled = this.currentPage == 1 ? true : false;
        document.getElementById("previous").disabled = this.currentPage == 1 ? true : false;
        document.getElementById("next").disabled = this.currentPage == this.numberOfPages ? true : false;
        document.getElementById("last").disabled = this.currentPage == this.numberOfPages ? true : false;
    }

    render() {
        let el = document.createElement("div");
        el.innerHTML = `
        <div id="outer">
        <div id="inner"; style="position: relative; left: 300px;">
            <input type="button" class="navButton" id="first" value="first" />
            <input type="button" class="navButton" id="previous" value="previous" />
            <input type="button" class="navButton" id="next" value="next" />
            <input type="button" class="navButton" id="last" value="last" />
        </div>
        </div>`
        el.querySelector('#first').onclick = () => this.firstPage();
        el.querySelector('#previous').onclick = () => this.previousPage();
        el.querySelector('#next').onclick = () => this.nextPage();
        el.querySelector('#last').onclick = () => this.lastPage();
             
        return el;
        
    }

}