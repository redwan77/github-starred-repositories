export class Repository{
    constructor(
        public name :string ,
        public ownerAvatar : string ,
        public description : string , 
        public nbStars : number ,
        public nbIssues : number ,
        public submitted : string ,
        public owner : string 
    ) {}
}