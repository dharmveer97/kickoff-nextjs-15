"use client";

import React from "react";
import { Input } from "@heroui/react";

const InputGroup = ({
  className = "",
  label,
  error,
  required = false,
  disabled = false,
  size,
  description,
  variant,
  ...props
}) => {
  return (
    <div className={`w-full ${disabled ? "cursor-not-allowed" : ""}`}>
      <Input
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
        step="any"
      />
    </div>
  );
};

export default InputGroup;
