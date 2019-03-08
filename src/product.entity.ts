import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'productName' })
  productName: string;

  @Column({ name: 'productDescription' })
  productDescription: string;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'isInStock' })
  isInStock: boolean;

  @Column({ name: 'image', length: 2083 })
  image: string;

}
