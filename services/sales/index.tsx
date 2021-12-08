import { fetchGraphQL } from "../graphql";

export const getSales = async (offset: number) => {
  const { errors, data } = await fetchGraphQL(
    `
    query sales {
      hic_et_nunc_trade(order_by: {timestamp: desc}, limit : 15, offset : ${offset}, where: {swap: {price: {_gte: "500000"}}}) {
        timestamp
        swap {
          price
        }
        token {
          artifact_uri
          display_uri
          id
          mime
          creator_id
          creator {
            name
            address
          }
        }
      }
    }`,
    "sales",
    {}
  );

  if (errors) {
    console.log(errors);
  }

  return data.hic_et_nunc_trade;
};
