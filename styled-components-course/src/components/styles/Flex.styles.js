import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;

  // any direct div or ul will set flex to 1
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
