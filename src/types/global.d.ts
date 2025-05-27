declare type MaterialCommunityIcons =
  keyof typeof import('@expo/vector-icons').MaterialCommunityIcons.glyphMap

declare type Ionicons =
  keyof typeof import('@expo/vector-icons').Ionicons.glyphMap

type ReactNode = import('react').ReactNode
type Dispatch<T> = import('react').Dispatch<T>
type SetStateAction<T> = import('react').SetStateAction<T>

declare namespace React {
  type ReactNode = import('react').ReactNode
}

declare namespace TextProps {
  type TextProps = import('react-native').TextProps
}
declare namespace TextStyle {
  type TextStyle = import('react-native').TextStyle
}

interface SearchItemProps {
  id: string
  title: string
  onPress?: () => void
}

interface SearchBarProps {
  setSearch: (value: string) => void
  [key: string]: any
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

interface IconStyleProps {
  onPress?: () => void
  Icon?: React.ComponentType<any>
  size?: number
  width?: number
  height?: number
  color?: string
  focused?: boolean
  rating?: 'full' | 'half' | 'zero'
}

interface ThemeColorProps {
  light?: string
  dark?: string
}
interface OfflineScreenProps {
  setIsOffline: Dispatch<React.SetStateAction<boolean>>
}

interface UseOnboardingSlidesProps {
  slidesLength: number
  onLastSlide?: () => void
}

interface UseOnboardingSlidesReturn<T> {
  currentIndex: number
  scrollX: Animated.Value
  slidesRef: React.RefObject<FlatList<T>>
  width: number
  viewableItemsChanged: (info: { viewableItems: ViewToken[] }) => void
  viewConfig: { viewAreaCoveragePercentThreshold: number }
  scrollToNext: () => void
  scrollToPrev: () => void
}

interface UseImageUploaderResult {
  image: string | null
  uploading: boolean
  pickImage: () => Promise<void>
  takePhoto: () => Promise<void>
}

interface RouteTabDataType {
  label: string
  route: string
}
