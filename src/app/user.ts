
export class User {
    constructor(
        public key: string,
        public login: string,
        public password: string,
        public email: string,
        public age: number,
        public site: string,
        public role: string,
        public terms: string
    ) {}
}