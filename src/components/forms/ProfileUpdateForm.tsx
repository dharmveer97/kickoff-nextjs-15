"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { parseDate } from "@internationalized/date";
import { motion } from "framer-motion";
import Link from "next/link";
import { DatePicker, Button } from "@heroui/react";

import { CustomCheckboxGroup, SelectGroup, TextInput } from "../elements";
import { Background } from "../atoms";
import AuthTopContent from "../elements/AuthTopContent";
import { useUserProfile } from "../../hooks/useUserProfile";

const genderOptions = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "others", name: "Others" },
];

const updateProfileSchema = z.object({
  firstName: z.string().nonempty("First name is required!"),
  lastName: z.string().nonempty("Last name is required!"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required!"),
  telephone: z.string().nonempty("Mobile number is required!"),
  dateOfBirth: z.string().nonempty("Date of birth is required!"),
  gender: z.string().nonempty("Gender is required!"),
  comment: z.string().nonempty("This field is required!"),
  instagramID: z.string().optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the terms and conditions.",
    }),
  }),
});

const UpdateProfileForm = () => {
  const {
    initialValues: initialData,
    handleUpdate,
    loading,
  } = useUserProfile();

  const formik = useFormik({
    initialValues: {
      firstName: initialData.firstName || "",
      lastName: initialData.lastName || "",
      email: initialData.email || "",
      telephone: initialData?.address?.telephone || "",
      dateOfBirth: initialData.dateOfBirth || "",
      gender: initialData.gender || "",
      comment: initialData.comment || "",
      instagramID: initialData.instagramID || "",
      agreeTerms: initialData.agreeTerms || false,
    },
    validationSchema: toFormikValidationSchema(updateProfileSchema),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleUpdate(values);
      } finally {
        setSubmitting(false);
      }
    },
    enableReinitialize: true,
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
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-8 dark:bg-gray-900"
    >
      <Background />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 w-full max-w-3xl bg-background/90 backdrop-blur-lg rounded-2xl border shadow-xl dark:bg-gray-900"
      >
        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <AuthTopContent
              title="Update Your Profile"
              subtitle="Keep your profile information up-to-date for a personalized experience"
            />
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
                disabled
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
                isDateUnavailable={(date) =>
                  date.compare(
                    parseDate(new Date().toISOString().split("T")[0]),
                  ) > 0
                }
              />
              <TextInput
                label="Instagram ID"
                name="instagramID"
                value={values.instagramID}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.instagramID && errors.instagramID}
              />
              <SelectGroup
                label="Gender"
                name="gender"
                placeholder="Select Gender"
                items={genderOptions}
                value={values.gender}
                onSelect={(val) => setFieldValue("gender", val.currentKey)}
                error={touched.gender && errors.gender}
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

            <CustomCheckboxGroup
              isSelected={values.agreeTerms}
              onChange={(val) => setFieldValue("agreeTerms", val)}
              color={
                touched.agreeTerms && errors.agreeTerms ? "danger" : "primary"
              }
              size="md"
              error={touched.agreeTerms && errors.agreeTerms}
            >
              <span className="inline-flex items-center gap-1 flex-wrap">
                I agree to the{" "}
                <Link href="/page/terms-and-conditions" target="_blank">
                  terms and conditions
                </Link>
                <span className="text-danger">*</span>
              </span>
            </CustomCheckboxGroup>

            <div className="pt-4 flex justify-center">
              <Button
                type="submit"
                isLoading={loading}
                isDisabled={loading}
                className="px-6"
              >
                Save Changes
              </Button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UpdateProfileForm;
