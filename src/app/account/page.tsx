import UpdateProfileForm from "@/components/forms/ProfileUpdateForm";

export function generateMetadata() {
  return {
    title: "Update Profile ",
    description:
      "Manage your Kickoff profile — update your personal information, contact details, and preferences securely.",
    keywords: [
      "update profile",
      "edit profile",
      "Kickoff account settings",
      "change user info",
      "update contact details",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Update Profile | Kickoff",
      description:
        "Easily manage your account by updating your profile, contact info, and preferences on Kickoff.",
      url: "https://theKickoffretreat.com/account/update-profile",
      siteName: "Kickoff",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://theKickoffretreat.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Update Profile on Kickoff",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Update Your Profile | Kickoff",
      description:
        "Edit your Kickoff account info to keep your recovery experience personalized and up-to-date.",
      creator: "@TheKickoffretreat",
      images: ["https://theKickoffretreat.com/images/logo.png"],
    },
  };
}

export default function page() {
  return <UpdateProfileForm />;
}
