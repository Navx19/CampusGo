import { z } from 'zod';

export const verifyStudentSchema =
  z.object({
    university: z.string().min(3),
    studentId: z.string().min(5),
    expiryYear: z.number().min(2025).max(2030),
  });