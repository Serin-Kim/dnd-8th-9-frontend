import styled from "@emotion/styled";

export const LinkWrap = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;

  a {
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.4rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  height: 6.4rem;

  strong {
    color: ${({ theme }) => theme.colors.grey[700]};
  }

  .version {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.blue[600]};
  }

  .withdrawal {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.grey[600]};
  }
`;
