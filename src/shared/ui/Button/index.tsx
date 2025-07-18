import styled, { CSSObject } from "styled-components";
import { StartHubColors } from "@/shared/design/color/StartHubColors";
import type { Interpolation } from "styled-components";

type FlattenSimpleInterpolation = Interpolation<object>[];

export interface ButtonProps {
  text: string;
  textTheme?: string;
  width?: number;
  height?: number;
  typography?: FlattenSimpleInterpolation;
  backgroundColor: string;
  onClick: () => void;
  disabled?: boolean;
  customStyle?: CSSObject;
  icon?: React.ReactNode;
  hover?: string;
}

interface StyledButtonProps {
  width?: number;
  height?: number;
  backgroundColor: string;
  textTheme?: string;
  disabled?: boolean;
  customStyle?: CSSObject;
  typography?: FlattenSimpleInterpolation;
  hasIcon?: boolean;
  hover?: string;
}

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "backgroundColor",
      "textTheme",
      "customStyle",
      "typography",
      "hasIcon",
      "hover",
    ].includes(prop),
})<StyledButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "48px")};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? StartHubColors.Gray3 : backgroundColor};
  color: ${({ textTheme, disabled }) =>
    disabled ? StartHubColors.Gray2 : textTheme ?? StartHubColors.White1};
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: ${({ hasIcon }) => (hasIcon ? "space-between" : "center")};
  padding: 0 22px;
  position: relative;
  &:hover {
    background-color: ${({ hover, disabled }) =>
      !disabled && hover ? hover : undefined};
  }
  ${({ typography }) => typography}
  ${({ customStyle }) => customStyle}
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: 22px;
`;

const TextContainer = styled.span`
  flex: 1;
  text-align: center;
`;

export const StartHubButton = ({
  text,
  textTheme,
  width,
  height,
  typography,
  backgroundColor,
  onClick,
  disabled = false,
  customStyle,
  icon,
  hover,
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      textTheme={textTheme}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      typography={typography}
      customStyle={customStyle}
      hasIcon={!!icon}
      hover={hover}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      <TextContainer>{text}</TextContainer>
    </StyledButton>
  );
};
