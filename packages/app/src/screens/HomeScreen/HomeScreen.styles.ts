import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
`;

export const Title = styled.Image.attrs({
  source: require('../../../assets/shffl.png')
})`
  width: 144px;
  height: 27px;
  resize-mode: contain;
`;

export const Icon = styled.Image.attrs({
  source: require('../../../assets/xxx.png')
})`
  width: 233px;
  height: 233px;
  margin: -30px;
  resize-mode: contain;
`

export const Subtitle = styled.Image.attrs({
  source: require('../../../assets/rave.png')
})`
  width: 94px;
  height: 60px;
  margin-top: 100px;
  resize-mode: contain;
`