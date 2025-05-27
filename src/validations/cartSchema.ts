import * as Yup from "yup";

export const cartDiscountValidationSchema: Yup.ObjectSchema<CartFormTypes> =
  Yup.object({
    discountCode: Yup.string().default(""),
  });
