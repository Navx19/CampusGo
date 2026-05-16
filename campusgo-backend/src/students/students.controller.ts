import {Body,Controller,Post,UseGuards} from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { VerifyStudentDto } from './dto/verifystudent.dto';
import { verifyStudentSchema } from './zod/verify-student.schema';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';

@Controller('students')
export class StudentsController {
  constructor(
    private studentsService: StudentsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('verify')
  verifyStudent(
    @Body(
      new ZodValidationPipe(
        verifyStudentSchema,
      ),
    )
    verifyStudentDto:
      VerifyStudentDto,

    @GetUser() user: any,
  ) {
    return this.studentsService.createVerification(
      {
        ...verifyStudentDto,

        user: {id: user.sub} as any,
      },
    );
  }
}
