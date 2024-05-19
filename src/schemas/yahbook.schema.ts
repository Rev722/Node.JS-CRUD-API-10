import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {

    DAVID = 'KING',
    SAMUEL = 'PROPHET',
    SAMSON = 'WARRIOR',
    MOSES = 'JUDGE',
}

@Schema({
    timestamps: true,
})

export class Yahbook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const YahbookSchema = SchemaFactory.createForClass(Yahbook)