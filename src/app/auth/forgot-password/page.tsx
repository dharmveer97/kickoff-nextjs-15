import ForgotPasswordClientPage from "@/components/forms/ForgetPasswordForm";





export async function generateMetadata() {
  return {
    title: "Forgot Password | GoodTrauma",
    description:
      "Forgot your password? Use this secure form to reset your GoodTrauma account credentials.",
    keywords: [
      "forgot password",
      "password reset",
      "GoodTrauma account recovery",
      "reset credentials",
      "secure login",
    ],
    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Forgot Password | GoodTrauma",
      description:
        "Reset your GoodTrauma account password securely and quickly.",
      url: "https://thegoodtraumaretreat.com/auth/forgot-password",
      siteName: "GoodTrauma",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://thegoodtraumaretreat.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: "GoodTrauma Forgot Password",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Forgot Password | GoodTrauma",
      description:
        "Securely reset your GoodTrauma password to regain account access.",
      creator: "@Thegoodtraumaretreat",
      images: ["https://thegoodtraumaretreat.com/images/logo.png"],
    },
  };
}

export default async function page() {
  return <ForgotPasswordClientPage />;
}
