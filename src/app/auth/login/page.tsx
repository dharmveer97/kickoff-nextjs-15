import LoginForm from "../../../../components/forms/LoginForm";

export async function generateMetadata() {
  return {
    title: "Login | GoodTrauma",
    description:
      "Log in securely to access your GoodTrauma account and continue your healing journey.",
    keywords: [
      "login",
      "GoodTrauma login",
      "account access",
      "secure login",
      "user authentication",
    ],
    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Login | GoodTrauma",
      description:
        "Access your GoodTrauma account securely with your email and password.",
      url: "https://thegoodtraumaretreat.com/auth/login",
      siteName: "GoodTrauma",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://thegoodtraumaretreat.com/images/logo.png",
          width: 1200,
          height: 630,
          alt: "GoodTrauma Login",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Login | GoodTrauma",
      description:
        "Securely log in to your GoodTrauma account to continue your personal growth journey.",
      creator: "@Thegoodtraumaretreat",
      images: ["https://thegoodtraumaretreat.com/images/logo.png"],
    },
  };
}

export default async function Page() {
  return <LoginForm />;
}
