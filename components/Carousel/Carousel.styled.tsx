import styled from "@emotion/styled";

export const Container = styled.div`
  img {
    height: 27rem;
    border-radius: 8px;
    object-fit: cover;
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.black};
  }
  margin: 12px 0 12px 0;
`;
