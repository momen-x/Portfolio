import z from "zod";

const AddUserSchema = z.object({
  message: z.string().min(1, { message: "the message is requierd" }),
  name: z.string().min(2, { message: "the name is requird" }),
  email: z.email({ message: "Enter a valied email" }).optional(),
});

type TAddUser = z.infer<typeof AddUserSchema>;

export { AddUserSchema, type TAddUser };
