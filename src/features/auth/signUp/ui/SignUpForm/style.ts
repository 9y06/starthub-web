import styled from "styled-components";
import { StartHubFont, StartHubColors } from "@/shared/design";


export const ErrorMessage = styled.p<{ $status?: "success" | "error" | "default" }>`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ $status }) =>
    $status === "success"
      ? StartHubColors.Primary
      : StartHubColors.Error};
`;

export const EmailContainer = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  font: ${StartHubFont.Pretendard.Body2.Medium};
  color: ${StartHubColors.Black1};
  margin-top: 20px;
`;

export const VerificationCodeContainer = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 320px;
  position: relative;
  margin-top: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
  }
`;

export const InputButton = styled.button<{ $isActive: boolean }>`
  position: absolute;
  right: 5px;
  top: 15px;
  padding: 0 10px;
  height: 20px;
  color: ${props => props.$isActive ? StartHubColors.Primary : StartHubColors.Gray3};
  font: ${StartHubFont.Pretendard.Caption1.Medium};
  border: none;
  border-radius: 4px;
  cursor: ${props => props.$isActive ? 'pointer' : 'not-allowed'};
  z-index: 1;
  opacity: ${props => props.$isActive ? 1 : 0.6};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.$isActive ? StartHubColors.Primary : StartHubColors.Gray3};
  }
  
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`

export const VerifyButton = styled.button`
  display: flex;  
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: ${StartHubColors.White1};
  color: ${StartHubColors.Primary};
  font: ${StartHubFont.Pretendard.Caption1.Medium};
  height: 50px;
  border: 1px solid ${StartHubColors.Primary};
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 108px;
  min-width: 108px;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    max-width: 100%;
    min-width: unset;
  }
`;


export const PasswordInputContainer = styled.div<{ $hasError?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-bottom: ${({ $hasError }) => $hasError ? '24px' : '0'};
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;


export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  z-index: 1;
  
  @media (max-width: 480px) {
    right: 12px;
  }
`;

export const VerificationWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 320px;
  align-items: flex-start;
  gap: 5px;
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;