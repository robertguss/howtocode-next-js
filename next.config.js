module.exports = {
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com", "tailwindui.com"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    })
    return config
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },

      {
        source: "/elixir-basics-lists",
        destination: "/posts/elixir-basics-lists",
        permanent: true,
      },

      {
        source: "/elixir-basics-basic-data-types",
        destination: "/posts/elixir-basics-basic-data-types",
        permanent: true,
      },

      {
        source: "/what-is-zettelkasten",
        destination: "/posts/what-is-zettelkasten",
        permanent: true,
      },

      {
        source:
          "/how-to-manage-your-expectations-while-teaching-yourself-how-to-code",
        destination:
          "/posts/how-to-manage-your-expectations-while-teaching-yourself-how-to-code",
        permanent: true,
      },

      {
        source: "/why-writing-is-important-for-software-developers",
        destination: "/posts/why-writing-is-important-for-software-developers",
        permanent: true,
      },

      {
        source: "/how-i-taught-myself-how-to-code",
        destination: "/posts/how-i-taught-myself-how-to-code",
        permanent: true,
      },

      {
        source: "/jamstack-gatsby-stripe-ecommerce",
        destination: "/posts/jamstack-gatsby-stripe-ecommerce",
        permanent: true,
      },

      {
        source: "/jamstack-eleventy-memberstack",
        destination: "/posts/jamstack-eleventy-memberstack",
        permanent: true,
      },

      {
        source: "/jamstack-hugo-netlify-zapier",
        destination: "/posts/jamstack-hugo-netlify-zapier",
        permanent: true,
      },

      {
        source: "/how-to-deploy-statamic-3-to-digitalocean-app-platform",
        destination:
          "/posts/how-to-deploy-statamic-3-to-digitalocean-app-platform",
        permanent: true,
      },

      {
        source: "/adonis-js-1-intro-and-setup",
        destination: "/posts/adonis-js-1-intro-and-setup",
        permanent: true,
      },

      {
        source: "/adonis-js-2-routes-layouts",
        destination: "/posts/adonis-js-2-routes-layouts",
        permanent: true,
      },

      {
        source: "/adonis-js-3-migrations-models",
        destination: "/posts/adonis-js-3-migrations-models",
        permanent: true,
      },

      {
        source: "/adonis-js-4-seeds-factories",
        destination: "/posts/adonis-js-4-seeds-factories",
        permanent: true,
      },

      {
        source: "/adonis-js-5-user-authentication",
        destination: "/posts/adonis-js-5-user-authentication",
        permanent: true,
      },

      {
        source: "/how-to-become-a-back-end-developer",
        destination: "/posts/how-to-become-a-back-end-developer",
        permanent: true,
      },

      {
        source: "/how-to-become-a-front-end-developer",
        destination: "/posts/how-to-become-a-front-end-developer",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-1-installing-tailwind-css",
        destination:
          "/posts/tailwind-css-travel-site-1-installing-tailwind-css",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-2-navigation-and-hero",
        destination: "/posts/tailwind-css-travel-site-2-navigation-and-hero",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-3-quote-form",
        destination: "/posts/tailwind-css-travel-site-3-quote-form",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-4-popular-destinations",
        destination: "/posts/tailwind-css-travel-site-4-popular-destinations",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-5-features-section",
        destination: "/posts/tailwind-css-travel-site-5-features-section",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-6-callouts-section",
        destination: "/posts/tailwind-css-travel-site-6-callouts-section",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-7-testimonial-section",
        destination: "/posts/tailwind-css-travel-site-7-testimonial-section",
        permanent: true,
      },

      {
        source: "/tailwind-css-travel-site-8-footer-purgecss",
        destination: "/posts/tailwind-css-travel-site-8-footer-purgecss",
        permanent: true,
      },

      {
        source: "/how-to-customize-your-sitemap-in-hugo",
        destination: "/posts/how-to-customize-your-sitemap-in-hugo",
        permanent: true,
      },

      {
        source: "/go-basics-1-installing-go-on-a-mac",
        destination: "/posts/go-basics-1-installing-go-on-a-mac",
        permanent: true,
      },

      {
        source: "/go-basics-2-variables-in-go",
        destination: "/posts/go-basics-2-variables-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-3-primitives-in-go",
        destination: "/posts/go-basics-3-primitives-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-4-constants-in-go",
        destination: "/posts/go-basics-4-constants-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-5-arrays-and-slices-in-go",
        destination: "/posts/go-basics-5-arrays-and-slices-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-6-maps-in-go",
        destination: "/posts/go-basics-6-maps-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-7-structs-in-go",
        destination: "/posts/go-basics-7-structs-in-go",
        permanent: true,
      },

      {
        source: "/understanding-map-filter-and-reduce-in-javascript",
        destination: "/posts/understanding-map-filter-and-reduce-in-javascript",
        permanent: true,
      },

      {
        source: "/go-basics-8-control-flow-in-go",
        destination: "/posts/go-basics-8-control-flow-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-9-loops-in-go",
        destination: "/posts/go-basics-9-loops-in-go",
        permanent: true,
      },

      {
        source: "/understanding-closures-in-javascript",
        destination: "/posts/understanding-closures-in-javascript",
        permanent: true,
      },

      {
        source: "/go-basics-10-pointers-in-go",
        destination: "/posts/go-basics-10-pointers-in-go",
        permanent: true,
      },

      {
        source: "/go-basics-11-functions-in-go",
        destination: "/posts/go-basics-11-functions-in-go",
        permanent: true,
      },

      {
        source: "/looping-through-objects-in-javascript",
        destination: "/posts/looping-through-objects-in-javascript",
        permanent: true,
      },

      {
        source: "/understanding-hoisting-in-javascript",
        destination: "/posts/understanding-hoisting-in-javascript",
        permanent: true,
      },

      {
        source: "/how-to-console-log-better-in-javascript",
        destination: "/posts/how-to-console-log-better-in-javascript",
        permanent: true,
      },

      {
        source: "/how-to-compare-dates-in-javascript",
        destination: "/posts/how-to-compare-dates-in-javascript",
        permanent: true,
      },
    ]
  },
}
