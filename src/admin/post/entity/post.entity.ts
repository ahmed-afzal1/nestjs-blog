import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: null })
  title: string;

  @Column({ type: 'varchar', length: 255, default: null })
  slug: string;

  @Column({ type: 'varchar', length: 255, default: null })
  photo: string;

  @Column({ type: 'boolean', default: 1 })
  publish: boolean;

  @Column({ type: 'boolean', default: 1 })
  staus: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
