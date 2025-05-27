"use client";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

import { TextInput } from "../elements";
import { TelegramIcon } from "../icons";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const FooterForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: toFormikValidationSchema(emailSchema),
    onSubmit,
  });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h3 className="text-lg font-semibold">Stay Updated</h3>
      <p className="text-gray-400">
        Subscribe to our newsletter for the latest updates.
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-2">
        <div className="relative">
          <TextInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full"
            error={
              formik?.touched?.email &&
              formik?.errors.email &&
              formik.errors?.email
            }
            endContent={
              <Button
                isIconOnly
                size="sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" bg-gradient-to-r from-blue-600 to-purple-600"
                type="submit"
              >
                <TelegramIcon className="w-4 h-4" />
              </Button>
            }
          />
        </div>
      </form>
    </motion.div>
  );
};

export default FooterForm;
