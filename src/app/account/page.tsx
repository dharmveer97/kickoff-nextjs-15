import UpdateProfileForm from "@/components/forms/ProfileUpdateForm";

export async function generateMetadata() {
  return {
    title: "Update Profile ",
    description:
      "Manage your Kickoff profile — update your personal information, contact details, and preferences securely.",
    keywords: [
      "update profile",
      "edit profile",
      "GoodTrauma account settings",
      "change user info",
      "update contact details",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Update Profile | GoodTrauma",
      description:
        "Easily manage your account by updating your profile, contact info, and preferences on GoodTrauma.",
      url: "https://thegoodtraumaretreat.com/account/update-profile",
      siteName: "GoodTrauma",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://thegoodtraumaretreat.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Update Profile on GoodTrauma",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Update Your Profile | GoodTrauma",
      description:
        "Edit your GoodTrauma account info to keep your recovery experience personalized and up-to-date.",
      creator: "@Thegoodtraumaretreat",
      images: ["https://thegoodtraumaretreat.com/images/logo.png"],
    },
  };
}





export default async function page() {
  return <UpdateProfileForm />;
}
