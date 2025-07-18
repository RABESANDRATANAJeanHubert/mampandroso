
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  readonly username: string;

  @Column()
  readonly email: string;

  @Column({unique: true})
  @Exclude()
  readonly password: string;
}
