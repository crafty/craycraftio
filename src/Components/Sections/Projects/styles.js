import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${props => props.theme.accentColor};
`;
