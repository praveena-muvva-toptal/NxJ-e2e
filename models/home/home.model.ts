export class Home {
    public orgUrl: string;
    public orgName: string;

    constructor(args) {
        this.orgUrl = args.orgUrl;
        this.orgName = args.orgName;
    }
}