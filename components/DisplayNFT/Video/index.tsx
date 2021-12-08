interface Props {
  artifactUri: string;
  displayUri: string;
  previewUri?: string;
  interactive?: boolean;
  preview?: boolean;
  displayView?: string;
}

const Video = ({
  artifactUri,
  displayUri,
  previewUri,
  preview,
  interactive,
  displayView,
}: Props) => {
  //   const domElement = useRef();

  return (
    <video
      // ref={domElement}
      // className={styles.video}
      autoPlay={true}
      playsInline
      muted
      loop
      controls={interactive}
      src={preview ? previewUri : artifactUri}
      poster={displayUri}
    />
  );
};

export default Video;
