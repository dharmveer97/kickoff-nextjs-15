import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";

import { TextInput, TextAreaInput, CustomCheckboxGroup } from "../elements";

const contactSchema = z.object({
  firstName: z.string().nonempty("First name is required!"),
  lastName: z.string().nonempty("Last name is required!"),
  telephone: z.string().nonempty("Phone number is required!"),
  email: z.string().email("Invalid email").nonempty("Email is required!"),
  subject: z.string().nonempty("Subject is required!"),
  comment: z.string().nonempty("Comment is required!"),
  agreeTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the terms and conditions",
    }),
  }),
});

const ContactForm = () => {
  const validationSchema = useMemo(
    () => toFormikValidationSchema(contactSchema),
    [],
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      subject: "",
      comment: "",
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Form values:", values);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Contact Information
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Please fill out all required fields marked with an asterisk (*).
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextInput
          label="First Name *"
          name="firstName"
          placeholder="Enter your first name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
        />
        <TextInput
          label="Last Name *"
          name="lastName"
          placeholder="Enter your last name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
        />
      </div>

      <TextInput
        label="Phone *"
        name="telephone"
        placeholder="Enter your phone number"
        value={values.telephone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.telephone && errors.telephone}
      />

      <TextInput
        label="Email *"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
      />

      <TextInput
        label="Subject *"
        name="subject"
        placeholder="What is this regarding?"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.subject && errors.subject}
      />

      <TextAreaInput
        label="Tell us how we can help you *"
        name="comment"
        placeholder="Please provide details about your inquiry..."
        value={values.comment}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.comment && errors.comment}
      />

      <CustomCheckboxGroup
        isSelected={values.agreeTerms}
        onChange={(val) => setFieldValue("agreeTerms", val)}
        color={touched.agreeTerms && errors.agreeTerms ? "danger" : "primary"}
        size="md"
        error={touched.agreeTerms && errors.agreeTerms}
      >
        <span className="relative inline-flex items-center gap-1 flex-wrap z-[9999]">
          I agree to the terms and conditions{" "}
          <Link isExternal showAnchorIcon href="/page/terms-and-conditions">
            -
          </Link>
        </span>
      </CustomCheckboxGroup>

      <Button
        type="submit"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        className="px-6"
      >
        Submit Message
      </Button>
    </form>
  );
};

export default ContactForm;
