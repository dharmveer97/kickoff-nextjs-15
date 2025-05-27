import ForgotPasswordClientPage from "@/components/forms/ForgetPasswordForm";

export async function generateMetadata() {
  return {
    title: "Forgot Password | Kickoff",
    description:
      "Forgot your password? Use this secure form to reset your Kickoff account credentials.",
    keywords: [
      "forgot password",
      "password reset",
      "Kickoff account recovery",
      "reset credentials",
      "secure login",
    ],
    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Forgot Password | Kickoff",
      description: "Reset your Kickoff account password securely and quickly.",
      url: "https://theKickoffretreat.com/auth/forgot-password",
      siteName: "Kickoff",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://theKickoffretreat.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Kickoff Forgot Password",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Forgot Password | Kickoff",
      description:
        "Securely reset your Kickoff password to regain account access.",
      creator: "@TheKickoffretreat",
      images: ["https://theKickoffretreat.com/images/logo.png"],
    },
  };
}

export default async function page() {
  return <ForgotPasswordClientPage />;
}
