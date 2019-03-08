import { Resolver, Query } from '@nestjs/graphql';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) { }

  @Query()
  async products() {
    return await this.productService.getAll();
  }
}
