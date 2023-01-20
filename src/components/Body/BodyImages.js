import { Fragment } from "react";

import BodyRow from './BodyRow';

import image1 from "../../assets/images/01_16_2023/0116202301.jpg";
import image2 from "../../assets/images/01_16_2023/0116202302.jpg";
import image3 from "../../assets/images/01_16_2023/0116202303.jpg";
import image4 from "../../assets/images/01_16_2023/0116202304.jpg";
import image5 from "../../assets/images/01_16_2023/0116202305.jpg";
import image6 from "../../assets/images/01_09_2023/01092020301.jpg";
import image7 from "../../assets/images/01_09_2023/01092020302.jpg";
import image8 from "../../assets/images/01_09_2023/01092020303.jpg";
import image9 from "../../assets/images/01_09_2023/01092020304.jpg";
import image10 from "../../assets/images/01_09_2023/01092020305.jpg";
import image11 from "../../assets/images/01_09_2023/01092020306.jpg";
import image12 from "../../assets/images/01_09_2023/01092020307.jpg";
import image13 from "../../assets/images/01_09_2023/01092020308.jpg";
import image14 from "../../assets/images/01_09_2023/01092020309.jpg";
import image15 from "../../assets/images/01_09_2023/01092020310.jpg";
import image16 from "../../assets/images/01_09_2023/01092020311.jpg";
import image17 from "../../assets/images/01_09_2023/01092020312.jpg";
import image18 from "../../assets/images/01_09_2023/01092020313.jpg";
import image19 from "../../assets/images/01_09_2023/01092020314.jpg";
import image20 from "../../assets/images/01_09_2023/01092020315.jpg";
import image21 from "../../assets/images/01_09_2023/01092020316.jpg";
import image22 from "../../assets/images/01_09_2023/01092020317.jpg";
import image23 from "../../assets/images/01_09_2023/I01092020318.jpg";
import image24 from "../../assets/images/01_01_2023/0101202301.jpg";
import image25 from "../../assets/images/01_01_2023/0101202302.jpg";
import image26 from "../../assets/images/01_01_2023/0101202303.jpg";
import image27 from "../../assets/images/01_01_2023/0101202304.jpg";
import image28 from "../../assets/images/01_01_2023/0101202305.jpg";
import image29 from "../../assets/images/12_26_2022/1226202201.jpg";
import image30 from "../../assets/images/12_26_2022/1226202202.jpg";
import image31 from "../../assets/images/12_26_2022/1226202203.jpg";
import image32 from "../../assets/images/12_26_2022/1226202204.jpg";
import image33 from "../../assets/images/12_26_2022/1226202205.jpg";
import image34 from "../../assets/images/12_26_2022/1226202206.jpg";
import image35 from "../../assets/images/12_26_2022/1226202207.jpg";
import image36 from "../../assets/images/12_26_2022/1226202208.jpg";
import image37 from "../../assets/images/12_26_2022/1226202209.jpg";
import image38 from "../../assets/images/12_26_2022/1226202210.jpg";
import image39 from "../../assets/images/12_26_2022/1226202211.jpg";
import image40 from "../../assets/images/12_26_2022/1226202212.jpg";
import image41 from "../../assets/images/12_12_2022/1212202201.jpg";
import image42 from "../../assets/images/12_12_2022/1212202202.jpg";
import image43 from "../../assets/images/12_12_2022/1212202203.jpg";
import image44 from "../../assets/images/12_12_2022/1212202204.jpg";
import image45 from "../../assets/images/12_12_2022/1212202205.jpg";
import image46 from "../../assets/images/12_12_2022/1212202206.jpg";
import image47 from "../../assets/images/12_12_2022/1212202207.jpg";
import image48 from "../../assets/images/12_12_2022/1212202208.jpg";
import image49 from "../../assets/images/12_12_2022/1212202209.jpg";
import image50 from "../../assets/images/12_05_2022/1205202201.jpg";
import image51 from "../../assets/images/12_05_2022/1205202202.jpg";
import image52 from "../../assets/images/12_05_2022/1205202203.jpg";
import image53 from "../../assets/images/12_05_2022/1205202204.jpg";
import image54 from "../../assets/images/12_05_2022/1205202205.jpg";
import image55 from "../../assets/images/12_05_2022/1205202206.jpg";
import image56 from "../../assets/images/12_05_2022/1205202207.jpg";
import image57 from "../../assets/images/12_05_2022/1205202208.jpg";
import image58 from "../../assets/images/12_05_2022/1205202209.jpg";
import image59 from "../../assets/images/12_05_2022/1205202210.jpg";
import image60 from "../../assets/images/12_05_2022/1205202211.jpg";
import image61 from "../../assets/images/12_05_2022/1205202212.jpg";
import image62 from "../../assets/images/12_05_2022/1205202213.jpg";
import image63 from "../../assets/images/12_05_2022/1205202214.jpg";
import image64 from "../../assets/images/12_05_2022/1205202215.jpg";
import image65 from "../../assets/images/12_05_2022/1205202216.jpg";

const PHOTOS = [[image1, image2, image3, image4], [image5, image6, image7, image8], [image9, image10, image11, image12], [image13, image14, image15, image16],
[image17, image18, image19, image20], [image21, image22, image23, image24], [image25, image26, image27, image28], [image29, image30, image31, image32], [image33, image34, image35, image36],
[image37, image38, image39, image40], [image41, image42, image43, image44], [image45, image46, image47, image48], [image49, image50, image51, image52], [image53, image54, image55, image56],
[image57,image58,image59,image60], [image61, image62, image63, image64], [image65]];


const BodyImages = () => {
  return (
    <Fragment>
      <BodyRow photos={PHOTOS[0]} />
      <BodyRow photos={PHOTOS[1]} />
      <BodyRow photos={PHOTOS[2]} />
      <BodyRow photos={PHOTOS[3]} />
      <BodyRow photos={PHOTOS[4]} />
      <BodyRow photos={PHOTOS[5]} />
      <BodyRow photos={PHOTOS[6]} />
      <BodyRow photos={PHOTOS[7]} />
      <BodyRow photos={PHOTOS[8]} />
      <BodyRow photos={PHOTOS[9]} />
      <BodyRow photos={PHOTOS[10]} />
      <BodyRow photos={PHOTOS[11]} />
      <BodyRow photos={PHOTOS[12]} />
      <BodyRow photos={PHOTOS[13]} />
      <BodyRow photos={PHOTOS[14]} />
      <BodyRow photos={PHOTOS[15]} />
      <BodyRow photos={PHOTOS[16]} />
    </Fragment>
  );
};

export default BodyImages;
