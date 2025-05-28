import SignupForm from '@/components/forms/SignUpForm'
import config from '@/utils/config'

export function generateMetadata() {
  return {
    title: `Create Account | ${config.siteName}`,
    description:
      'Join KickoffRetreat — Create your account to access powerful tools, personalized support, and exclusive content.',
    keywords: [
      'sign up',
      'register',
      'create account',
      'KickoffRetreat membership',
      'new user',
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Create Account | ${config.siteName}`,
      description: `Join ${config.siteName} — Sign up for personalized experiences and recovery tools.`,
      url: config.siteUrl,
      siteName: config.siteName,
      type: 'website',
      images: [
        {
          url: `${config.siteUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: `Register on ${config.siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Join ${config.siteName}`,
      description: `Create your ${config.siteName} account for a better mental health journey.`,
      images: [`${config.siteUrl}/images/logo.png`],
    },
  }
}

export default function page() {
  return <SignupForm />
}
