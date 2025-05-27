"use client";

import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import InputGroup from "../elements/TextInput";
import { Background } from "../atoms";
import { useSetNewPassword } from "../../hooks/useSetNewPassword";

const formId = "SetNewPasswordForm";

const schema = z
  .object({
    password: z
      .string()
      .min(2, "Seems a bit short...")
      .nonempty("Password is required!"),
    confirmPassword: z.string().nonempty("This field is required!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not matched!",
    path: ["confirmPassword"],
  });

const SetNewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { handleSubmitForm, loading } = useSetNewPassword(token);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleSubmitForm(values);
      } catch (error) {
        console.log(error, "An error occur");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { touched, errors, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <div className="h-screen flex min-h-full flex-1 items-center flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto w-full md:max-w-sm">
        <Background />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Reset your password
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto w-full md:max-w-sm">
        <form id={formId} onSubmit={handleSubmit} className="space-y-6">
          <InputGroup
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password ? errors.password : ""}
          />
          <InputGroup
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.confirmPassword && errors.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />
          <div>
            <Button isLoading={loading} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Link className="relative text-primary my-5 text-sm" href="/auth/login">
        Back to Login
      </Link>
    </div>
  );
};

export default SetNewPasswordForm;
