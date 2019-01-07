import styled from 'styled-components';

const SideNav = styled.nav`
  background: ${props => props.theme.colors.bgSecondary};
  width: 240px;
  overflow: auto;
  height: 100%;
`;

SideNav.displayName = 'SideNav';
export default SideNav;