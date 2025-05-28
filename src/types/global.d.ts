type ReactNode = import('react').ReactNode
type Dispatch<T> = import('react').Dispatch<T>
type SetStateAction<T> = import('react').SetStateAction<T>

declare namespace React {
  type ReactNode = import('react').ReactNode
}

interface SearchItemProps {
  id: string
  title: string
  onPress?: () => void
}

interface SearchBarProps {
  setSearch: (value: string) => void
  [key: string]: string
}

interface EmptyStateProps {
  title?: string
  description?: string
  imageSource?: ImageSourcePropType
  buttonText?: string
  onButtonPress?: () => void
}

interface CountryProps {
  name: string
  code: string
  dialCode: string
  flag: string
}

interface ProfileProps {
  name: string
  email: string
  profile: string
}

interface UserWithProfile {
  user: ProfileProps
}

interface ThemeColorProps {
  light?: string
  dark?: string
}
