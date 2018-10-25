export class Quote {
    public showDescription: boolean;
    constructor(public quote: string, public name: string, public uploadDate: Date, public upvote: number, public downvote: number) {
        this.showDescription = false;
    }
}
