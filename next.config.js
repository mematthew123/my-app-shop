


const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
  
  // The "priority" key determines where the rewrite will be applied in the
  // chain of rewrites. The higher the number, the last (in the chain) it will
  // be applied. The default value is `1`
  //priority: 1
}

  module.exports = {
    rewrites: () => [STUDIO_REWRITE],
    env: {
      SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
      SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN
    },
    images: {
      domains: ['cdn.shopify.com']
    }
  }