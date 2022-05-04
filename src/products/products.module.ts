import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/product.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
})
export class ProductsModule {}
