import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Put,
  Body,
  Delete,
  //ParseIntPipe,
} from '@nestjs/common';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //return `products limit=>${limit} offset=>${offset} brand=>${brand}`;
    return this.productService.findALl();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    //return {
    //  message: `product ${productId}`,
    //};

    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto){
    // return {
    //   message: 'create product',
    //   payload,
    // };
    return this.productService.create(payload);
  }


  @Put(':productId')
  update(
    @Param('productId') productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    return {
      productId,
      payload,
    };
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.remove(productId);
  }

}
