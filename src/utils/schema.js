import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidationSchema } from "../utils/schema";

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("age")} type="number" placeholder="Age" />
      {errors.age && <p>{errors.age.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
