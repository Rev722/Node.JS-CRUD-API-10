import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Yahbook } from 'src/schemas/yahbook.schema';

@Injectable()
export class YahbookService {
    constructor (
        @InjectModel (Yahbook.name)
        private yahbookModel: mongoose.Model<Yahbook>
    ) {}

    async findAll(): Promise<Yahbook[]> {
        const yahbooks = await this.yahbookModel.find();
        return yahbooks;
    }

    async create(yahbook: Yahbook): Promise<Yahbook> {
        const res = await this.yahbookModel.create(yahbook);
        return res;
    }

    async findById(id: string): Promise<Yahbook> {
        const yahbook = await this.yahbookModel.findById(id);

        if(!yahbook) {
            throw new NotFoundException('Yahbook Not Found.')
        }
        return yahbook;
    }

    async updateById(id: string, yahbook: Yahbook): Promise<Yahbook> {
        return await this.yahbookModel.findByIdAndUpdate(id, yahbook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Yahbook> {
        return await this.yahbookModel.findByIdAndDelete(id);
    }
}
