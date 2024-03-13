import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: "Required. Please select Semester" }),
    year: z.string({ required_error: "Required. Please select Year" }),
    startMonth: z.string({
      required_error: "Required. Please select start month",
    }),
    endMonth: z.string({ required_error: "Required. Please select end month" }),
  });
