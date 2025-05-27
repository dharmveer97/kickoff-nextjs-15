"use client";

import React from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "@heroui/react";
import Link from "next/link";

import Background from "../atoms/Background";
import TextInput from "../elements/TextInput";
import AuthTopContent from "../elements/AuthTopContent";
import { useAuthLogin } from "../../hooks/useAuthLogin";

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .nonempty("Password is required"),
});

const LoginForm = () => {
  const { handleLogin, loading } = useAuthLogin();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleLogin(values);
      } catch (err) {
        console.error("Login failed:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = formik;

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8  dark:bg-gray-900">
      <Background className="absolute inset-0 z-0" />
      <div className="relative z-10 w-full max-w-md space-y-8 bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-10 shadow-xl dark:shadow-xl dark:shadow-black/20">
        <AuthTopContent
          title="Welcome to Our Platform"
          subtitle="Log in to track your orders, manage your cart, and discover new deals"
        />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your.email@example.com"
              required
              error={touched.email && errors.email}
              autoComplete="email"
            />

            <TextInput
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              required
              error={touched.password && errors.password}
              autoComplete="current-password"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            color="primary"
            isLoading={isSubmitting || loading}
            isDisabled={isSubmitting || loading}
            className="py-3 text-base font-medium"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 dark:text-gray-400 space-y-4">
          <p>
            New to our platform?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Create an account
            </Link>
          </p>
          <p>
            <Link
              href="/auth/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
