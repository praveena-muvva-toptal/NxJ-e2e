export class Store {
    public storeName: string;
    public productName: string;

    constructor(args) {
        this.storeName = args.storeName;
        this.productName = args.productName;
    }
}