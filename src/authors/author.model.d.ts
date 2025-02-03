export interface authorDTO{
    authorId:number;
    authorName:string;
    biography:string;
    dateOfBirth:Date;
    profileURL:string;
}

export interface saveAuthorDTO{
    authorName:string;
    biography?:string;
    dateOfBirth?:Date;
    profile?:File;
    profileURL?:string;
}