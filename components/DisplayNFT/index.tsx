import Image from "./Image";
import Video from "./Video";
// import ipfsClient from "ipfs-http-client";
// import { GLBComponent } from "./glb";
// import { VideoComponent } from "./video";
// import { AudioComponent } from "./audio";
// import { VectorComponent } from "./vector";
// import { HTMLComponent } from "./html";
// import { UnknownComponent } from "./unknown";
// import { PdfComponent } from "./pdf";
// import { MIMETYPE, IPFS_DIRECTORY_MIMETYPE } from "../../constants";
// import { Container } from "./container";
// import { MD } from "./md";
import { hashToURL } from "../../utils/ifps";

interface Props {
  mimeType: string;
  artifactUri: string;
  displayUri: string;
  previewUri?: string;
  creator?: string;
  objkt?: string;
  interactive?: boolean;
  preview?: boolean;
  displayView?: string;
}

export const MIMETYPE = {
  BMP: "image/bmp",
  GIF: "image/gif",
  JPEG: "image/jpeg",
  PNG: "image/png",
  SVG: "image/svg+xml",
  TIFF: "image/tiff",
  WEBP: "image/webp",
  MP4: "video/mp4",
  OGV: "video/ogg",
  QUICKTIME: "video/quicktime",
  WEBM: "video/webm",
  GLB: "model/gltf-binary",
  GLTF: "model/gltf+json",
  MP3: "audio/mpeg",
  OGA: "audio/ogg",
  WAV: "audio/wav",
  XWAV: "audio/x-wav",
  FLAC: "audio/flac",
  PDF: "application/pdf",
  ZIP: "application/zip",
  ZIP1: "application/x-zip-compressed",
  ZIP2: "multipart/x-zip",
  MD: "text/markdown",
};

const DisplayNFT = ({
  mimeType,
  artifactUri,
  displayUri,
  previewUri,
  creator,
  objkt,
  interactive = false,
  preview = false,
  displayView,
}: Props) => {
  switch (mimeType) {
    case MIMETYPE.BMP:
    case MIMETYPE.GIF:
    case MIMETYPE.JPEG:
    case MIMETYPE.PNG:
    case MIMETYPE.TIFF:
    case MIMETYPE.WEBP:
      return (
        <div className="">
          <Image
            artifactUri={hashToURL(artifactUri, "IPFS")}
            displayUri={hashToURL(displayUri, "IPFS")}
            isInteractive={interactive || mimeType === MIMETYPE.GIF}
            // previewUri={previewUri}
            // preview={preview}
            // displayView={displayView}
          />
        </div>
      );

    case MIMETYPE.MP4:
    case MIMETYPE.OGV:
    case MIMETYPE.QUICKTIME:
    case MIMETYPE.WEBM:
      return (
        <div className="h-full w-full max-w-md relative">
          <Video
            artifactUri={hashToURL(artifactUri, "IPFS")}
            displayUri={hashToURL(displayUri, "IPFS")}
            // previewUri={previewUri}
            // preview={preview}
            // onDetailView={interactive}
            // displayView={displayView}
          />
        </div>
      );
    /* VECTOR */
    // case MIMETYPE.SVG:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   parsedDisplayUri = HashToURL(displayUri, "IPFS");
    //   return (
    //     <Container interactive={interactive}>
    //       <VectorComponent
    //         artifactUri={parsedArtifactUri}
    //         displayUri={parsedDisplayUri}
    //         previewUri={previewUri}
    //         preview={preview}
    //         creator={creator}
    //         objkt={objkt}
    //         onDetailView={interactive}
    //         displayView={displayView}
    //       />
    //     </Container>
    //   );

    // /* HTML ZIP */
    // case IPFS_DIRECTORY_MIMETYPE:
    // case MIMETYPE.ZIP:
    // case MIMETYPE.ZIP1:
    // case MIMETYPE.ZIP2:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   parsedDisplayUri = HashToURL(displayUri, "IPFS");
    //   return (
    //     <Container interactive={interactive}>
    //       <HTMLComponent
    //         artifactUri={parsedArtifactUri}
    //         displayUri={parsedDisplayUri}
    //         previewUri={previewUri}
    //         creator={creator}
    //         objkt={objkt}
    //         preview={preview}
    //         onDetailView={interactive}
    //         displayView={displayView}
    //       />
    //     </Container>
    //   );

    // /* 3D */
    // case MIMETYPE.GLB:
    // case MIMETYPE.GLTF:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   parsedDisplayUri = HashToURL(displayUri, "IPFS");
    //   return (
    //     <Container interactive={interactive}>
    //       <GLBComponent
    //         artifactUri={parsedArtifactUri}
    //         displayUri={parsedDisplayUri}
    //         previewUri={previewUri}
    //         preview={preview}
    //         onDetailView={interactive}
    //         displayView={displayView}
    //         displayView={displayView}
    //       />
    //     </Container>
    //   );
    // /* AUDIO */
    // case MIMETYPE.MP3:
    // case MIMETYPE.OGA:
    // case MIMETYPE.FLAC:
    // case MIMETYPE.WAV:
    // case MIMETYPE.XWAV:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   parsedDisplayUri = HashToURL(displayUri, "IPFS");
    //   return (
    //     <Container interactive={interactive}>
    //       <AudioComponent
    //         artifactUri={parsedArtifactUri}
    //         displayUri={parsedDisplayUri}
    //         previewUri={previewUri}
    //         preview={preview}
    //         onDetailView={interactive}
    //         displayView={displayView}
    //       />
    //     </Container>
    //   );
    // /* PDF */
    // case MIMETYPE.PDF:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   parsedDisplayUri = HashToURL(displayUri, "IPFS");
    //   return (
    //     <Container interactive={interactive}>
    //       <PdfComponent
    //         artifactUri={parsedArtifactUri}
    //         displayUri={parsedDisplayUri}
    //         previewUri={previewUri}
    //         preview={preview}
    //         onDetailView={interactive}
    //         displayView={displayView}
    //       />
    //     </Container>
    //   );

    // case MIMETYPE.MD:
    //   parsedArtifactUri = HashToURL(artifactUri, "IPFS");
    //   return (
    //     <MD
    //       artifactUri={HashToURL(artifactUri, "IPFS")}
    //       displayView={displayView}
    //     ></MD>
    //   );
    // default:
    //   return <UnknownComponent mimeType={mimeType} />;
    default:
      return null;
  }
};

export default DisplayNFT;
