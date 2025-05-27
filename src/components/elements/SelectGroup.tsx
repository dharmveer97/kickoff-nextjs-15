"use client";

import React from "react";
import { Select, SelectItem } from "@heroui/react";

const SelectGroup = React.forwardRef(
  (
    {
      options,
      error,
      name,
      required = false,
      onSelect,
      initialValues,
      description,
      placeholder = "Select",
      label,
      className = "",
      disabled = false,
      selectedKeys,
      color = "primary",
      isOpen,
      ...props
    },
    ref,
  ) => {
    const handleSelect = React.useCallback(
      (selectedValue) => {
        onSelect?.(selectedValue);
      },
      [onSelect],
    );

    const defaultKeys = React.useMemo(
      () => (initialValues ? [`${initialValues}`] : undefined),
      [initialValues],
    );

    return (
      <Select
        ref={ref}
        key={name}
        {...props}
        isOpen={isOpen}
        isDisabled={disabled}
        className={`w-full ${className}`}
        placeholder={placeholder}
        size="lg"
        radius="lg"
        color={color}
        errorMessage={error}
        isInvalid={!!error}
        label={label || name}
        variant="bordered"
        isRequired={required}
        onSelectionChange={handleSelect}
        defaultSelectedKeys={defaultKeys}
        selectedKeys={selectedKeys}
        description={description}
      >
        {options?.map((item, index) => (
          <SelectItem
            key={item.value?.toString() || item.name || index.toString()}
            value={item.value || item.name}
          >
            {item.name}
          </SelectItem>
        ))}
      </Select>
    );
  },
);

SelectGroup.displayName = "SelectGroup";

export default SelectGroup;
