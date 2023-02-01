import styled from "styled-components";

export const FeatureContainer = styled.div`
  height: 300px;
  display: flex;
  gap: 4em;
  margin: 5em;
  flex-direction: row;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  &:nth-child(even) {
    flex-direction: row;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: max-content;
    margin: 1em;
    &:nth-child(odd) {
      flex-direction: column;
    }
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

export const FeatureImage = styled.div`
  width: 50%;
  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const FeatureDescContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  > header {
    color: white;
    display: flex;
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 20px;
  }
  > span {
    display: flex;
    text-align: center;
  }
  > .action-btn {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 100%;
    > header {
      font-size: 30px;
    }
  }
`;
