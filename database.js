class Database {
    articleDatabase = [
        {
            id: 11,
            article: "programming is great",
            name: "programming article 11",
            tags: ["progamming"]
        },
        {
            id: 12,
            article: "programming is great",
            name: "programming article 12",
            tags: ["progamming"]
        },
        {
            id: 13,
            article: "programming is great",
            name: "programming article 13",
            tags: ["progamming"]
        },
        {
            id: 14,
            article: "programming is great",
            name: "programming article 14",
            tags: ["progamming"]
        },
        {
            id: 15,
            article: "programming is great",
            name: "programming article 15",
            tags: ["progamming"]
        },
        {
            id: 16,
            article: "programming is great",
            name: "programming article 16",
            tags: ["progamming"]
        },
        {
            id: 17,
            article: "programming is great",
            name: "programming article 17",
            tags: ["progamming"]
        },
        {
            id: 18,
            article: "programming is great",
            name: "programming article 18",
            tags: ["progamming"]
        },
        {
            id: 19,
            article: "programming is great",
            name: "programming article 19",
            tags: ["progamming", "life"]
        },
        {
            id: 20,
            article: "programming is great",
            name: "programming article 20",
            tags: ["progamming"]
        },
        {
            id: 21,
            article: "programming is great",
            name: "programming article 21",
            tags: ["progamming"]
        },
        {
            id: 22,
            article: "programming is great",
            name: "programming article 22",
            tags: ["progamming"]
        },
        {
            id: 23,
            article: "programming is great",
            name: "programming article 23",
            tags: ["progamming"]
        },
        {
            id: 24,
            article: "programming is great",
            name: "programming article 24",
            tags: ["progamming"]
        },
        {
            id: 25,
            article: "programming is great",
            name: "programming article 25",
            tags: ["progamming"]
        },
        {
            id: 26,
            article: "programming is great",
            name: "programming article 26",
            tags: ["progamming"]
        },
        {
            id: 27,
            article: "programming is great",
            name: "programming article 27",
            tags: ["progamming"]
        },
        {
            id: 28,
            article: "programming is great",
            name: "programming article 28",
            tags: ["progamming"]
        },
        {
            id: 29,
            article: "programming is great",
            name: "programming article 29",
            tags: ["progamming"]
        },
        {
            id: 30,
            article: "programming is great",
            name: "programming article 30",
            tags: ["progamming"]
        },
        {
            id: 31,
            article: "programming is great",
            name: "programming article 31",
            tags: ["progamming"]
        },
    ];

    
    constructor () {
        this.database = this.loadDb() || this.articleDatabase;
    };

    getArticleObj(artId) {
        for (let article of this.database) {
            if (artId == article.id) {
                return article;
            }
        }
    };

    loadDb() { 
        return JSON.parse(localStorage.getItem('localDatabase'));
    };

    populateStorage() {
        localStorage.setItem('localDatabase', JSON.stringify(this.database));
    };

    // getArticle(articleIndex) {
    //     return new Article(this.database[articleIndex]).render();
    // };

    checkArticleExists(articleIndex) {
        return articleIndex in this.database;
    };

    getDbLength() {
        return this.database.length;
    };

    getArticleUpvoteCount(artId) {
        let upvotes = this.getArticleObj(artId).upvotes || 0;
        return upvotes;
    }

    vote(artId, vote) {
        let currentArt = this.getArticleObj(artId);
        let currentUpvotes = currentArt.upvotes || 0;
        currentArt.upvotes = currentUpvotes + vote
    }

    getComments(artId) {
        let comments = this.getArticleObj(artId).comments;
        return comments;
    }

    setComments(artId, comments) {
        this.getArticleObj(artId).comments = comments;
    }

    getDatabaseSlice(paginator) {
        return this.database.slice(paginator.getOffset(), paginator.getOffset() + paginator.numberPerPage);
    }

    deleteArticle(artId) {
        for (let arrayPos in this.database) {
            if (this.database[arrayPos].id == artId) {
                this.database.splice(arrayPos, 1)
            }
        };
        alert("You deleted")
        
    }

    createNewArticle() {
        let newId = this.database[(this.database.length -1)].id + 1;
        let emptyArticle = {
            id: newId,
            article: "programming is great",
            name: `programming article ${newId}`,
            tags: ["progamming"]
        }
        this.database.push(emptyArticle);
        this.populateStorage();
    }
};