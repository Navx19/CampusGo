import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
<<<<<<< HEAD
  role!: Role;

  @Column()
  securityQuestion!: string;

  @Column()
  securityAnswerHash!: string;
}
=======
  role: Role;

  @Column()
  securityQuestion: string;

  @Column()
  securityAnswerHash: string;
}
>>>>>>> 60fffa5396cee033878de23c2ff7c5139efa9c94
