import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  price: number;

  @Column()
  inserted: Date;

  @Column()
  insertedBy: string;

  @Column()
  updated: Date;

  @Column()
  updatedBy: string;
}
