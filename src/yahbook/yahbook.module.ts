import { Module } from '@nestjs/common';
import { YahbookController } from './yahbook.controller';
import { YahbookService } from './yahbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { YahbookSchema } from 'src/schemas/yahbook.schema';

@Module({
  imports: [MongooseModule.forFeature ([{ name: 'Yahbook', schema: YahbookSchema }])],
  controllers: [YahbookController],
  providers: [YahbookService]
})
export class YahbookModule {}
