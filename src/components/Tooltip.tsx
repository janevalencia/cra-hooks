import React, { ReactNode, useState } from "react";
import "../styles/tooltip.css";

type TooltipProps = {
    children: ReactNode,
    timeoutDelay?: number,
    direction: string,
    message: string
};

const Tooltip = ({children, timeoutDelay, direction, message } : TooltipProps) => {
    let timeout: ReturnType<typeof setTimeout>;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, timeoutDelay || 200);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="Tooltip-Wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Target icon */}
            {children}
            {active && (
                <div className={`Tooltip-Tip ${direction || "top"}`}>
                    {/* Tooltip content */}
                    {message}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
