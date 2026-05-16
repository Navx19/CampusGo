import {Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum VerificationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity()
export class StudentProfile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  university!: string;

  @Column()
  studentId!: string;

  @Column()
  expiryYear!: number;

  @Column({
    type: 'enum',
    enum: VerificationStatus,
    default: VerificationStatus.PENDING,
  })
  verificationStatus!:
    VerificationStatus;

 @OneToOne(
  () => User,
  (user) => user.studentProfile,
)
@JoinColumn()
user!: User;
}