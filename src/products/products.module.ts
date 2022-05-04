import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/category.service';
import { ProductsService } from './services/product.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService],
})
export class ProductsModule {}
