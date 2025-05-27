"use client";

import { useFormik } from "formik";
import { Button } from "@heroui/react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Link from "next/link";

import InputGroup from "../elements/TextInput";
import { Background } from "../atoms";
import { useForgotPassword } from "../../hooks/useForgotPassword";
import AuthTopContent from "../elements/AuthTopContent";

const formId = "ForgotPasswordForm";

const schema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .nonempty("Email is required!"),
});

const ForgetPasswordForm = () => {
  const { handleSubmitForm, loading } = useForgotPassword();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (values) {
        handleSubmitForm(values);
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 300);
      resetForm();
    },
  });

  const { touched, errors, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <div className="h-screen flex min-h-full flex-1 items-center flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto w-full md:max-w-sm">
        <Background />
        <AuthTopContent title="Forgot Password?" />
      </div>
      <div className="mt-10 sm:mx-auto w-full md:max-w-sm">
        <form id={formId} onSubmit={handleSubmit} className="space-y-6">
          <InputGroup
            placeholder="example@email.com"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : undefined}
          />
          <div>
            <Button type="submit" isLoading={loading}>
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

export default ForgetPasswordForm;
