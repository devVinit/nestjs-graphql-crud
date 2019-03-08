import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) { }

  async getAll() {
    return await this.productRepository.find();
  }

  async getById(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (product) {
      return product;
    } else {
      throw new NotFoundException();
    }
  }

  async create(data: any) {
    const product = this.productRepository.create(data);
    await this.productRepository.save(product);
    return product;
  }

  async update(id: string, data: any) {
    await this.productRepository.update({ id }, data);
    return this.productRepository.findOne({ id });
  }

  async delete(id: string) {
    await this.productRepository.delete({ id });
  }
}
