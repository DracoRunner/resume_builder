import {
  FeatureContainer,
  FeatureDescContainer,
  FeatureImage,
} from "./features.style";

export default function Features({
  imgURl,
  headerText,
  descText,
  btnName,
  ...params
}: any) {
  return (
    <FeatureContainer>
      <FeatureImage>
        <img src={imgURl} />
      </FeatureImage>
      <FeatureDescContainer>
        <header className="section-header">{headerText}</header>
        <span className="section-desc">{descText}</span>
        {/* <div className="action-btn">
          <button>{btnName}</button>
        </div> */}
      </FeatureDescContainer>
    </FeatureContainer>
  );
}
