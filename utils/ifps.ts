export const hashToURL = (hash: string, type: string) => {
  if (hash == undefined) {
    return "";
  }

  switch (type) {
    case "HIC":
      return hash.replace("ipfs://", "https://pinata.hicetnunc.xyz/ipfs/");
    case "CLOUDFLARE":
      return hash.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/");
    case "PINATA":
      return hash.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
    case "IPFS":
      return hash.replace("ipfs://", "https://ipfs.io/ipfs/");
    // case "INFURA":
    //   try {
    //     var cidv1 = new ipfsClient.CID(hash.replace("ipfs://", "")).toV1();
    //     var subdomain = cidv1.toBaseEncodedString("base32");
    //     return `https://${subdomain}.ipfs.infura-ipfs.io/`;
    //   } catch (err) {
    //     return undefined;
    //   }
    case "DWEB":
      return hash.replace("ipfs://", "http://dweb.link/ipfs/");
    default:
      console.error("please specify type");
      return hash;
  }
};
