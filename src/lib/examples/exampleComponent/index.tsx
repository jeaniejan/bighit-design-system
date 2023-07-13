import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";

// Full Width를 지원하는 버튼 컴포넌트의 Props 예시입니다.
type ExampleComponentProps = {
  isFocused: boolean;
  isDisabled: boolean;
  buttonText: string;
  onClick: ()=>void;
};

// Full Width를 지원하는 버튼 컴포넌트 구성 예시입니다.
const ExampleComponent: React.FC<ExampleComponentProps> = ({
  isFocused,  // 버튼 생성 여부
  isDisabled, // 버튼 비활성화 여부
  buttonText, // 버튼에 들어갈 텍스트
  onClick,    // 클릭 이벤트 시 작동할 내용
}) => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  
  useEffect(()=>{
    if (isFocused) setIsVisible(true);
    else setIsVisible(false);
  }, [isFocused]);

  return (
    <StyledExampleComponent>
      {
        isVisible &&
        <button onClick={onClick} disabled={isDisabled}>
          {buttonText}
        </button>
      }
    </StyledExampleComponent>
  );
};

const StyledExampleComponent = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 50px;
    padding: 13px 14px;
    border: none;
    
    background-color: #000000;
    color: #FFFFFF;
  }

  button:hover {
    background-color: #555555;
    color: #FFFFFF;
  }

  button:active {
    background-color: #303030;
    color: #FFFFFF;
  }

  button:disabled {
    background-color: #EBEBEB;
    color: #C2C2C2;
    cursor: not-allowed;
  }
`;

export default ExampleComponent;