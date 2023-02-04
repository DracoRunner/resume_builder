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
    position: relative;
    height: 400px;
    margin: 0;
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
    position: absolute;
    top: 0;
    height: 100%;
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
    position: absolute;
    display: flex;
    padding: 0em;
    flex-direction: column;
    height: 100%;
    top: 0;
    background: #4a4a4a73;
    width: 100%;
    overflow: hidden;
    justify-content: flex-start;
    gap: 0;
    > header {
      font-size: 25px;
      line-height: 30px;
      padding: 0.5em;
      margin-bottom: 0px;
    }
    > span {
      font-size: 15px;
      padding: 1em;
    }
  }
`;
