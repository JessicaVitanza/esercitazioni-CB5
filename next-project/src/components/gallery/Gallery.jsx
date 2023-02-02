import Image from "next/image";
import styles from "./index.module.scss";

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <Image
        src="https://picsum.photos/1920/1080?1"
        alt="hero image"
        width={500}
        height={0}
        priority
      />

      <Image
        src="https://picsum.photos/1920/1080?2"
        alt="hero image"
        width={500}
        height={0}
        priority
      />

      <Image
        src="https://picsum.photos/1920/1080?3"
        alt="hero image"
        width={500}
        height={0}
        priority
      />
    </div>
  );
};

export default Gallery;