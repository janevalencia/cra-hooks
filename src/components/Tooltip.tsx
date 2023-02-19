import React, { ReactNode, useState } from "react";
import "../styles/tooltip.css";
import Portal from "./Portal";

type TooltipProps = {
    tooltipId: string;
    tooltipParent: ReactNode;
    timeoutDelay?: number;
    direction: string;
    message: string;
};

const Tooltip = ({
    tooltipId,
    tooltipParent,
    timeoutDelay,
    direction,
    message,
}: TooltipProps) => {
    let timeout: ReturnType<typeof setTimeout>;
    const [active, setActive] = useState<boolean>(false);

    // Display the tooltip message when mouse hover on.
    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, timeoutDelay || 200);
    };

    // Remove the tooltip message when mouse hover off.
    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="Tooltip-Wrapper"
            id={tooltipId}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Target icon */}
            {tooltipParent}
            {active && (
                <Portal wrapperId={tooltipId}>
                    <div className={`Tooltip-Tip ${direction || "top"}`}>
                        {/* Tooltip content */}
                        {message}
                    </div>
                </Portal>
            )}
        </div>
    );
};

export default Tooltip;
