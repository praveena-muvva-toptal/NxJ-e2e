export class Login {
    public email: string;
    public password: string;

    constructor(args) {
        this.email = args.email;
        this.password = args.password;
    }
}