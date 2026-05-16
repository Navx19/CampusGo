import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {StudentProfile,VerificationStatus} from './entites/student-profile.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentProfile)
    private studentRepository:
      Repository<StudentProfile>,
  ) {}

  async createVerification(
    data: Partial<StudentProfile>,
  ) {
    const verification =
      this.studentRepository.create({
        ...data,

        verificationStatus:
          VerificationStatus.PENDING,
      });

    return this.studentRepository.save(
      verification,
    );
  }
}
