import type { NextPage } from "next";
import { useEffect, useLayoutEffect, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { getSales } from "../services/sales";
import DisplayNFT from "../components/DisplayNFT";
import Link from "next/link";

enum NetworkType {
  MAINNET = "mainnet",
  DELPHINET = "delphinet",
  EDONET = "edonet",
  FLORENCENET = "florencenet",
  GRANADANET = "granadanet",
  HANGZHOUNET = "hangzhounet",
  CUSTOM = "custom",
}

const RPC_URL = "https://mainnet.api.tez.ie";
const Tezos = new TezosToolkit(RPC_URL);

const Home: NextPage = () => {
  const [feed, setFeed] = useState<any>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadWallet = () => {
      const wallet = new BeaconWallet({
        name: "hicetnunc.xyz",
        preferredNetwork: NetworkType.MAINNET,
      });
      Tezos.setWalletProvider(wallet);
    };

    loadWallet();
  }, []);

  useEffect(() => {
    const fetchFeed = async () => {
      setIsLoading(true);
      const nfts = await getSales(offset);
      const newFeed = [...feed, ...nfts];
      const ids = newFeed.map((nft: any) => nft.token.id);
      const nftsNoDuplicate = newFeed.filter(
        (nft: any, index: number) => !ids.includes(nft.token.id, index + 1)
      );
      setFeed(nftsNoDuplicate);
      setIsLoading(false);
    };

    fetchFeed();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        feed.length > 0 &&
        !isLoading &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      ) {
        setOffset(offset + 15);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, isLoading]);

  return (
    <>
      <main className="flex justify-center flex-col items-center">
        <div className="my-4">
          <h1 className="text-2xl">hen feed</h1>
        </div>
        <div className="feed">
          {feed?.map((item: any, index: number) => {
            return (
              <div className="mb-4" key={`${item.token.id}-${index}`}>
                <Link href={`/objkt/${item.token.id}`}>
                  <a className="item">
                    <DisplayNFT
                      artifactUri={item.token.artifact_uri}
                      displayUri={item.token.display_uri}
                      mimeType={item.token.mime}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        {isLoading ? (
          <span className="text-lg text-center my-8">loading...</span>
        ) : null}
      </main>
      <style jsx>{`
        .feed {
          column-count: 2;
        }

        .item {
          break-inside: avoid;
          display: block;
        }
      `}</style>
    </>
  );
};

export default Home;
