import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { FormFieldType } from "./forms/PatientForm";
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
}
export default function CustomFormField({
  control,
  fieldType,
  name,
  label,
  placeholder,
  iconSrc,
  iconAlt,
}: CustomProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX &&
            label(<FormLabel>{label}</FormLabel>)}
        </FormItem>
      )}
    />
  );
}
