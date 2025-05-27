import { truncate, get } from "lodash";

import config from "./config";

const urlForImage = () => {
  console.log("hello world");
};

function extractImages(data) {
  const listedImages =
    get(data, "otherVariants[0].images", []).length > 0
      ? get(data, "otherVariants[0].images", [])
      : get(data, "images", []);

  // Extract all images from otherVariants[0]
  const images = (listedImages || [])
    .map(
      (item) =>
        (item && urlForImage(item).width(1200).height(630).url()) || null,
    )
    .filter(Boolean);

  // Featured image is not added here because the app automatically uses the first image
  // from the array as the featured image. This ensures consistency as the first image
  // in 'images' and the featured image are always the same.
  const allImages = [...images]?.filter(Boolean).map((url) => url);
  return {
    allImages,
  };
}

// for use it once
function generateProductTitle(data) {
  return `${data?.title} | ${config.siteName}`;
}

function generateProductDescription(data) {
  if (data?.seoDescription) {
    return truncate(data.seoDescription, { length: 160 });
  }
  if (data?.body) {
    return truncate(data.body, { length: 160 });
  }
  return config.description;
}

export function generateStaticPagesMetadata(data, path, type) {
  try {
    const title = generateProductTitle(data);
    const description = generateProductDescription(data);
    const { allImages } = extractImages(data);
    const slug = path
      ? `${config.siteUrl}/${path}/${data?.slug?.current}`
      : `${config.siteUrl}/${data?.slug?.current}`;

    const images = allImages?.filter(Boolean).map((url) => ({
      url,
      width: 1200,
      height: 630,
      alt: data?.title || config.siteName,
    }));

    return {
      title,
      description,
      keywords: data?.keywords || config.siteName,
      authors: [{ name: config.siteName }],
      metadataBase: new URL(config.siteUrl),
      alternates: {
        canonical: slug,
      },
      openGraph: {
        title,
        description,
        url: slug,
        emails: [config.email],
        phoneNumbers: [config.telephone],
        siteName: config.siteName,
        images,
        locale: "en_US",
        type: type || "website",
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images,
        creator: config.twitter.creator,
        site: config.siteName,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
      },
      category: "shopping",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: config.siteName,
      description: config.description,
    };
  }
}
