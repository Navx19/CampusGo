import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(3),

  email: z.string().email(),

  password: z.string().min(6),

  phone: z.string(),

  role: z.enum(['student', 'admin']),

  securityQuestion: z.string(),

  securityAnswer: z.string(),
});
