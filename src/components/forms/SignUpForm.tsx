"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button, DatePicker } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import TextInput from "../elements/TextInput";
import { CustomCheckboxGroup, SelectGroup } from "../elements";
import { Background } from "../atoms";
import { useRegisterMutation } from "../../hooks/useRegisterMutation";

const genderOptions = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "others", name: "Others" },
];

const signupSchema = z
  .object({
    firstName: z.string().nonempty("First name is required!"),
    lastName: z.string().nonempty("Last name is required!"),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required!"),
    telephone: z.string().nonempty("Mobile number is required!"),
    password: z.string().nonempty("Password is required!"),
    confirmPassword: z.string().nonempty("Please confirm your password"),
    dateOfBirth: z.string().nonempty("Date of birth is required!"),
    gender: z.string().nonempty("Gender is required!"),
    comment: z.string().nonempty("This field is required!"),
    instagramID: z.string().optional(),
    agreeTerms: z.literal(true, {
      errorMap: () => ({
        message: "You must agree to the terms and conditions.",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not matched!",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const { handleSubmitForm, loading } = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      dateOfBirth: null,
      password: "",
      confirmPassword: "",
      gender: "male",
      comment: "",
      instagramID: "",
      agreeTerms: false,
    },
    validationSchema: toFormikValidationSchema(signupSchema),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await handleSubmitForm(values);
        resetForm();
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = formik;

  const handleDateChange = (date) => {
    const dateString = date.toString();
    setFieldValue("dateOfBirth", dateString);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-8  dark:bg-gray-900"
    >
      <Background />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className=" dark:bg-gray-900 relative z-10 w-full max-w-3xl bg-background/90 backdrop-blur-lg rounded-2xl border shadow-xl"
      >
        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Join the Journey
            </motion.h1>
            <p className="text-muted-foreground">
              Create your account to unlock exclusive access to The Good Trauma
              Retreat
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && errors.firstName}
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && errors.lastName}
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <TextInput
                label="Mobile Number"
                name="telephone"
                type="tel"
                value={values.telephone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.telephone && errors.telephone}
              />

              <DatePicker
                label="Date of Birth"
                variant="bordered"
                name="dateOfBirth"
                hideTimeZone
                isRequired
                placeholder="Select your birth date"
                defaultValue={
                  values.dateOfBirth ? parseDate(values.dateOfBirth) : undefined
                }
                onChange={handleDateChange}
                onBlur={() => handleBlur("dateOfBirth")}
                isInvalid={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                errorMessage={touched?.dateOfBirth && errors?.dateOfBirth}
                classNames={{
                  base: "max-w-full",
                  label: "text-black/90 dark:text-white/90",
                }}
                isDateUnavailable={(date) => {
                  return (
                    date.compare(
                      parseDate(new Date().toISOString().split("T")[0]),
                    ) > 0
                  );
                }}
              />

              <TextInput
                label="Instagram ID"
                name="instagramID"
                value={values.instagramID}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.instagramID && errors.instagramID}
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
              <TextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.confirmPassword && errors.confirmPassword}
              />

              <SelectGroup
                initialValues={values.gender}
                label="Gender"
                items={genderOptions}
                aria-label="Gender"
                name="gender"
                placeholder="Select Gender"
                value={values.gender}
                onSelect={(val) => setFieldValue("gender", val.currentKey)}
                options={genderOptions}
                required
                handleChange={handleChange}
                error={
                  errors?.gender && touched?.gender ? errors?.gender : undefined
                }
              />

              <TextInput
                label="How did you hear about us?"
                name="comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.comment && errors.comment}
              />
            </div>

            <div className="pt-4">
              <CustomCheckboxGroup
                isSelected={values?.agreeTerms}
                onChange={(val) => {
                  setFieldValue("agreeTerms", val);
                }}
                color={
                  touched.agreeTerms && errors.agreeTerms ? "danger" : "primary"
                }
                size="md"
                value={values.agreeTerms}
                error={
                  errors?.agreeTerms && touched?.agreeTerms
                    ? errors?.agreeTerms
                    : undefined
                }
              >
                <span className="inline-flex items-center gap-1 flex-wrap">
                  I agree to becoming a member of The Good Trauma Retreat
                  private members association
                  <Link href="/page/terms-and-conditions" target="_blank">
                    terms of service, and conditions
                  </Link>
                  <span className="text-danger">*</span>
                </span>
              </CustomCheckboxGroup>
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                type="submit"
                isDisabled={loading}
                isLoading={loading}
                className="px-6"
              >
                Sign up
              </Button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SignupForm;
