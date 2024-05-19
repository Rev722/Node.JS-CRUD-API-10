import { Category } from "../schemas/yahbook.schema";



export class CreateYahbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}