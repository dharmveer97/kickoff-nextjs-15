import LoginForm from '@/components/forms/LoginForm'

export function generateMetadata() {
  return {
    title: 'Login | Kickoff',
    description:
      'Log in securely to access your Kickoff account and continue your healing journey.',
    keywords: [
      'login',
      'Kickoff login',
      'account access',
      'secure login',
      'user authentication',
    ],
    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: 'Login | Kickoff',
      description:
        'Access your Kickoff account securely with your email and password.',
      url: 'https://theKickoffretreat.com/auth/login',
      siteName: 'Kickoff',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: 'https://theKickoffretreat.com/images/logo.png',
          width: 1200,
          height: 630,
          alt: 'Kickoff Login',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Login | Kickoff',
      description:
        'Securely log in to your Kickoff account to continue your personal growth journey.',
      creator: '@TheKickoffretreat',
      images: ['https://theKickoffretreat.com/images/logo.png'],
    },
  }
}

export default function Page() {
  return <LoginForm />
}
