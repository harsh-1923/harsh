import * as Select from "@radix-ui/react-select";
import React from "react";

import "./ModelSelectorDemo.css";
import { X } from "lucide-react";

const ModelSelectorDemo = () => {
  return (
    <div>
      <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value placeholder="gpt-3.5-turbo (default)" />
          {/* <Select.Icon className="SelectIcon"></Select.Icon> */}
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="SelectContent">
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <Select.Label className="SelectLabel">Models</Select.Label>
                <SelectItem value="GPT-3.5-turbo">gpt-3.5-turbo</SelectItem>
                <SelectItem value="GPT-4.5-turbo">gpt-3.5-turbo-16k</SelectItem>
                <SelectItem value="GPT-4.5-turbo">gpt-4</SelectItem>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className="SelectItem" {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export default ModelSelectorDemo;
