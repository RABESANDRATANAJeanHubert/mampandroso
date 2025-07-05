import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  longUrl: string;

  @Column({ unique: true })
  shortCode: string;
}
