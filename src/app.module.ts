import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ProductService } from './services/product/product.service';
import { UsersService } from './services/users/users.service';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { CustomersService } from './services/customers/customers.service';
import { UserService } from './services/user/user.service';
import { BrandService } from './services/brand/brand.service';
import { CategoryService } from './services/category/category.service';
import { CustomerService } from './services/customer/customer.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    BrandsController,
    OrdersController,
    CustomersController,
  ],
  providers: [AppService, ProductService, UsersService, BrandsService, CategoriesService, CustomersService, UserService, BrandService, CategoryService, CustomerService],
})
export class AppModule {}
