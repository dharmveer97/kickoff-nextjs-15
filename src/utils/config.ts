const config = {
  debug: process.env.NODE_ENV === "development",
  siteName: "Kickoff",
  name: "Kickoff",
  siteUrl: "https:/Kickoff.com",
  address: "491 Brimley Rd #16",
  telephone: "+12313",
  email: "Kickoff@hotmail.com",
  description: "",
  ogImage: "/images/logo.png",
  author: "Kickoff",
  projectKey: "commerce",
  graphQlUri: "/api/graphql",
  graphQlUriDev: "/api/graphql",
  creator: "@kickoff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https:/kickoff.com",
    siteName: "kickoff",
    description: "kickoff",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "kickoff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The kickoff",
    description: "kickoff",
    image: "/images/logo.png",
    creator: "@kickoff",
  },
  links: {
    twitter: "https://twitter.com/kickoff",
  },
};

export default config;
