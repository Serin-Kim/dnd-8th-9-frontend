import styled from "@emotion/styled";

export const Container = styled.div`
  /* border: 1px solid red; */
  margin-top: 6rem;
  padding: 0 1.6rem;
`;

export const ProfileImage = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-bottom: 3.3rem;
`;

export const EditIcon = styled.div`
  position: absolute;
  left: 62.5%;
  right: 0%;
  top: 62.5%;
  bottom: 0%;
`;

export const Title = styled.div`
  height: 1.7rem;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colors.grey[800]};
`;

export const Input = styled.div`
  padding: 0.8rem 1.2rem;
  height: 3.9rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[400]};

  display: flex;

  input {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[16]};
    line-height: 1.9rem;
    color: ${({ theme }) => theme.colors.grey[800]};
  }
`;

export const Cell = styled.div`
  margin-bottom: 2.4rem;
`;
