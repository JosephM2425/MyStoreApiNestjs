import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brand.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
