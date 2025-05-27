import { useTransition, useCallback } from "react";
import { Checkbox } from "@heroui/react";

const CustomCheckboxGroup = ({
  isSelected,
  onChange,
  disabled = false,
  size = "md",
  color = "primary",
  value,
  children,
  reversed = false,
  error,
  className,
  ...props
}) => {
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    (val) => {
      if (disabled) return;
      startTransition(() => {
        onChange?.(val);
      });
    },
    [disabled, onChange],
  );

  return (
    <div className="flex flex-col gap-1">
      <Checkbox
        {...props}
        isSelected={isSelected}
        onValueChange={handleChange}
        isDisabled={disabled}
        isReadOnly={isPending}
        size={size}
        color={color}
        value={value?.toString()}
        isInvalid={!!error}
        classNames={{
          label: "text-default-700 dark:text-default-500",
          wrapper: "!mr-3",
          base: `flex items-center ${
            reversed ? "flex-row-reverse" : ""
          } ${className || ""}`,
        }}
      >
        <span className={`leading-normal`}>{children}</span>
      </Checkbox>
      {error && <p className="text-tiny text-danger pl-7">{error}</p>}
    </div>
  );
};
export default CustomCheckboxGroup;
