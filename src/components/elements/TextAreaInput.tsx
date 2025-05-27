"use client";

import React from "react";
import { Textarea } from "@heroui/react";

const TextAreaInput = ({
  disabled = false,
  label,
  error,
  required = false,
  className = "",
  size,
  description,
  variant,
  color,
  ...props
}) => {
  return (
    <div className={`w-full ${disabled ? "cursor-not-allowed" : ""}`}>
      <Textarea
        {...props}
        className={className}
        isDisabled={disabled}
        size={size ?? "lg"}
        radius={size ?? "lg"}
        width={100}
        fullWidth
        errorMessage={error}
        isInvalid={!!error}
        label={label}
        variant={variant ?? "bordered"}
        isRequired={required}
        description={description}
        color={color ?? "primary"}
      />
    </div>
  );
};

export default TextAreaInput;
