import pngTransparentGooglePlayStoreLogoGooglePlayAppStoreAndroidWalletsTextLabelLogo from "./pngTransparentGooglePlayStoreLogoGooglePlayAppStoreAndroidWalletsTextLabelLogo.png";
import vector_1 from "./vector_1.svg";
import vector_2 from "./vector_2.svg";
import vector_3 from "./vector_3.svg";
import vector_4 from "./vector_4.svg";
export const GooglePlay = ({
  override,
}: {
  override?: React.CSSProperties;
}) => {
  return (
    <div
      className="overflow-hidden relative w-[110px] h-10 bg-[rgb(3,_4,_6)]"
      style={override}
    >
      <div className="absolute w-[104px] left-[3px] h-[30px] top-[5px] origin-top-left border-solid border-neutral-50 border-[0.6px] rounded overflow-hidden">
        <img
          className="origin-top-left h-full w-full"
          style={{
            transform: "scale(113.38%, 402.19%) translate(-5.96%, -37.57%)",
          }}
          src={
            pngTransparentGooglePlayStoreLogoGooglePlayAppStoreAndroidWalletsTextLabelLogo.src
          }
        />
      </div>
      <img
        className="absolute w-px left-[99.39px] h-px top-[22.24px]"
        src={vector_1.src}
      />
      <img
        className="absolute w-px left-[98.19px] h-1 top-[21.96px]"
        src={vector_2.src}
      />
      <img
        className="absolute w-0 left-[94.91px] h-0 top-[22.24px]"
        src={vector_3.src}
      />
      <img
        className="absolute w-px left-[98.39px] h-0.5 top-[22.71px]"
        src={vector_4.src}
      />
    </div>
  );
};
