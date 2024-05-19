import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { YahbookService } from './yahbook.service';
import { Yahbook } from 'src/schemas/yahbook.schema';
import { CreateYahbookDto } from 'src/dto/create-yahbook.dto';
import { UpdateYahbookDto } from 'src/dto/update-yahbook.dto';

@Controller('yahbooks')
export class YahbookController {
    constructor (private yahbookService: YahbookService) {}

    @Get()
    async getAllYahbooks(): Promise <Yahbook[]> {
    return this.yahbookService.findAll();
    }

    @Post()
    async createYahbook (
        @Body()
        yahbook: CreateYahbookDto,
    ): Promise <Yahbook> {
        return this.yahbookService.create(yahbook);
    }

    @Get(':id')
    async getYahbook(
        @Param('id')
        id: string,
    ): Promise <Yahbook> {
    return this.yahbookService.findById(id);
    }

    @Put(':id')
    async updateYahbook(
        @Param('id')
        id: string,
        @Body()
        yahbook: UpdateYahbookDto,
    ): Promise <Yahbook> {
    return this.yahbookService.updateById(id, yahbook);
    }

    @Delete(':id')
    async deleteYahbook(
        @Param('id')
        id: string,
    ): Promise <Yahbook> {
    return this.yahbookService.deleteById(id);
    }
}