/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { InputFieldProps } from "@/types";

const InputField = ({
  className,
  registerName,
  label,
  placeholder,
  type,
  disabled,
  register,
  errors,
}) => {
  const registerValueType = type === "number" ? { valueAsNumber: true } : {};

  return (
    <div className={className}>
      <div>
        {label && <Label htmlFor={registerName}>{label}</Label>}
        <Input
          className="flex w-full items-center self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white"
          type={type}
          id={registerName}
          disabled= {disabled}
          placeholder={placeholder}          
          {...register(registerName, registerValueType)}
        />
      </div>
      {errors?.[registerName] && (
        <p className="text-red-500 mt-1">
          {errors}
        </p>
      )}
    </div>
  );
};

export default InputField;