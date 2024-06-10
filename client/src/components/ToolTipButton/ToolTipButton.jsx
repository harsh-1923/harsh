import React from "react";
import "./ToolTipButton.css";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Plus } from "lucide-react";

const ToolTipButton = ({ title = "Tooltip", children }) => {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>{children}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" sideOffset={5}>
              {title}
              {/* <Tooltip.Arrow className="TooltipArrow" /> */}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

export default ToolTipButton;
