import {useEffect} from 'react';

import loadScript from '~/helpers/loadScript';

// @feedback - This hook could be replaced by remix-utils's ow hook should we want to go down this route.
export function useAirReview(data) {
  useEffect(() => {
    try {
      window.AIR_REVIEWS = window.AIR_REVIEWS || {};
      window.AIR_REVIEWS.customer = data.customer
        ? {
            ...data.customer,
            id: parseFloat(
              data.customer.id.replace('gid://shopify/Customer/', ''),
            ),
          }
        : {email: null, first_name: null, last_name: null, id: null};
      window.AIR_REVIEWS.branding = 'false';
      window.AIR_REVIEWS.appBlock = 'false';
      window.AIR_REVIEWS.shopData = data.airShopData;
      window.AIR_REVIEWS.settings = data.airSettingsData;
      window.AIR_REVIEWS.translations = data.airTranslationData;
      window.AIR_REVIEWS.hasStorefrontToken = data.airHasStorefrontData;
      window.AIR_REVIEWS.collections = [];
      window.AIR_REVIEWS.collectionsName = [];
      window.Shopify = window.Shopify || {};
      window.Shopify.theme = {name: ''};
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Cannot initialize Avada Air Review');
    }
  }, []);
}
