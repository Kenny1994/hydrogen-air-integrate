/**
 *
 * @returns {Promise<*>}
 */
export default async function getAirReviewData({storefront, namespace}) {
  const airReviewData = await storefront.query(
    `
       #graphql
       query {
         shop {
           metafield (namespace: "${namespace}", key: "data"){
             value
           }
         }
       }
     `,
    {variables: {}},
  );
  return airReviewData.shop.metafield
    ? JSON.parse(airReviewData.shop.metafield.value)
    : null;
}
