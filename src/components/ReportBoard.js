import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const ReportBoard = () => {
  return (
    <Wrapper>
      <ReportAccount>
        <div>
          <AvatarGroup total={24}>
            <Avatar alt="지인능욕" sx={{ width: 70, height: 70 }}>
              지인능욕
            </Avatar>
            <Avatar alt="합성계" sx={{ width: 70, height: 70 }}>
              합성계
            </Avatar>
          </AvatarGroup>
        </div>
      </ReportAccount>
      <ButtonWrapper>
        <button>디지털성범죄 지원센터에 신고하기</button>
        <button>트위터 계정 신고하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ReportBoard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  border: 1px solid black;
`;

const ReportAccount = styled.div`
  height: 50%;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: inherit;
  justify-content: space-around;
`;