export class Quote {
    public showDescription: boolean;
    constructor(public quote: string, public name: string, public description: string) {
        this.showDescription = false;
    }
}
