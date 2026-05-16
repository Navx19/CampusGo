import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { StudentProfile } from '../../students/entites/student-profile.entity';
import { OneToOne } from 'typeorm';
export enum Role {
  STUDENT = 'student',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  @Column()
  phone!: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.STUDENT,
  })
  role!: Role;

  @Column()
  securityQuestion!: string;

  @Column()
  securityAnswerHash!: string;

  @OneToOne(() => StudentProfile, (studentProfile) => studentProfile.user)
  studentProfile!: StudentProfile;
}
