import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const PHSelect = ({ name, label, options }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            size="large"
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
