"use client";

import { JSX } from "react";
import { useFormStatus } from "react-dom";
import { CloseIconProps } from "@/types/component-types";
import { default as MUICloseIcon } from "@mui/icons-material/Close";

export function CloseIcon({ onClick, ...rest }: CloseIconProps): JSX.Element {
  const { pending } = useFormStatus();

  const handleClick = (e: any) => {
    !pending && onClick(e);
  };

  return <MUICloseIcon onClick={handleClick} {...rest} />;
}
