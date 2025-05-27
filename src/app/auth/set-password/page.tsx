import SetNewPasswordForm from "../../../../components/forms/SetNewPasswordForm";
import config from "../../../../utils/config";

export async function generateMetadata() {
  return {
    title: `Update Profile | ${config.siteName}`,
    description: `Manage your ${config.siteName} profile — update your personal information, contact details, and preferences securely.`,
    keywords: [
      "update profile",
      "edit profile",
      `${config.siteName} account settings`,
      "change user info",
      "update contact details",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Update Profile | ${config.siteName}`,
      description: `Easily manage your account by updating your profile, contact info, and preferences on ${config.siteName}.`,
      url: `${config.siteUrl}/account/update-profile`,
      siteName: config.siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${config.siteUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: `Update Profile on ${config.siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Update Your Profile | ${config.siteName}`,
      description: `Edit your ${config.siteName} account info to keep your recovery experience personalized and up-to-date.`,
      creator: "@TheKickoffretreat",
      images: [`${config.siteUrl}/images/logo.png`],
    },
  };
}

export default async function page() {
  return <SetNewPasswordForm />;
}
