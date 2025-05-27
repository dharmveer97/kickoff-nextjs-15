"use client";

import React from "react";
import currency from "currency.js";
import { find } from "lodash";
import { z } from "zod";

const PricingSchema = z.array(
  z.object({
    country: z.string(),
    price: z.number(),
    discountPrice: z.number(),
  }),
);

const CurrencyFormatPropsSchema = z.object({
  amount: z.union([z.number(), z.string()]).optional(),
  pricing: PricingSchema.optional(),
  isDiscount: z.boolean().optional(),
});

export const formatCurrency = (val, currencySymbol = "$") => {
  const parsedValue = typeof val === "string" ? parseFloat(val) : val;

  return currency(parsedValue, {
    symbol: currencySymbol,
    formatWithSymbol: true,
  }).format();
};

export const getPrice = (pricing, isDiscount = false, location) => {
  let value = 0;
  let price = find(pricing, { country: location?.country });
  price ??= find(pricing, { country: "United States of America" });
  if (price) {
    value = isDiscount ? price.discountPrice : price.price;
  }
  return value;
};

// CurrencyFormat component
const CurrencyFormat = ({ amount, pricing, isDiscount = false }) => {
  const { location } = useStore((state) => ({
    location: state.user?.location,
  }));
  const userCurrency = location?.currency ?? "$";

  // Calculate value safely
  const getValue = () => {
    if (pricing) {
      return getPrice(pricing, isDiscount, location);
    }
    if (amount) {
      return amount;
    }
    return 0;
  };

  try {
    CurrencyFormatPropsSchema.parse({ amount, pricing, isDiscount });
    return <>{formatCurrency(getValue(), userCurrency)}</>;
  } catch (error) {
    console.error("Invalid currency format props:", error);
    return <>0.00</>;
  }
};

export default CurrencyFormat;
