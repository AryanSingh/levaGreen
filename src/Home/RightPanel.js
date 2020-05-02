import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

export default function RightPanel(props) {
	return (
		<OuterContainer>
			<HeaderWrapper>
				<LeftContainer>
					<Name>Hi Martin</Name>
					<Company>AMCP Corp</Company>
				</LeftContainer>
				<RightContainer>
					<ImageBox />
				</RightContainer>
			</HeaderWrapper>
			<Divider />
			<ActionButton>
				<ActionText>Action Button</ActionText>
			</ActionButton>
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f6fa;
  box-shadow: inset 0 0 24px 0 rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CommonP = styled.p`
  margin: 0;
  padding: 0;
`;
const Name = styled(CommonP)`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`;

const Company = styled(CommonP)`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const ImageBox = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid;
  border-radius: 25%;
  background-color: #d8d8d8;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 10px;
`;

const ActionButton = styled.div`
  background-color: #3784ff;
  color: #ffffff;
  position: absolute;
  bottom: 20px;
  width: 70%;
  padding: 10px 5px;
  border: 1px solid;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  border-radius: 10px;
`;

const ActionText = styled(CommonP)`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-right: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-right: 10px;
`;
