import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getObjkt } from "../../services/objkt";
import DisplayNFT from "../../components/DisplayNFT";
import Link from "next/link";

interface Props {
  objkt: any;
}

const ObjkPage: NextPage<Props> = ({ objkt }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-screen-lg mx-auto px-6">
      <div className="my-4 absolute">
        <Link href="/">◀︎ back to gallery</Link>
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center md:justify-start md:flex-row">
        <DisplayNFT
          artifactUri={objkt.artifact_uri}
          displayUri={objkt.display_uri}
          mimeType={objkt.mime}
        />
        <div className="mt-8 md:ml-24">
          <h2 className="text-lg mb-4">
            {objkt.title} - {objkt.creator.name}
          </h2>
          <p>{objkt.description}</p>
          <div className="mt-8 border border-grey-300 inline-block px-4 py-1">
            <Link href={`https://hicetnunc.art/objkt/${objkt.id}`}>
              <a target="_blank">see on hicetnunc</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const objktId = Number(query.id);
  const objkt = await getObjkt(objktId);

  return {
    props: { objkt },
  };
};

export default ObjkPage;
