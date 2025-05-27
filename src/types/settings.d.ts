interface SettingsProps {
  isLoggedIn?: boolean
}

interface SettingsLayoutProps {
  children?: React.ReactNode
  title?: string
  subtitle?: string
  buttonLink?: Href | null
  buttonLabel?: string
}

interface SettingsOptionItemProps {
  id?: string
  title: string
  description?: string
  onPress?: (event: GestureResponderEvent) => void
  iconName?: any
  iconSize?: number
  iconColorDark?: string
  iconColorLight?: string
  active?: boolean
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
  descriptionStyle?: TextStyle
  iconContainerStyle?: ViewStyle
  href?: string | undefined
  loading?: boolean
}

interface SettingsGroup {
  title: string
  items: SettingsOptionItemProps[]
}

interface SettingsToggleSectionProps {
  fieldName: string
  initialValue: boolean
  iconName?: keyof typeof MaterialIcons.glyphMap
  heading?: string
  title?: string
  subtitle?: string
  onToggleChange?: (value: boolean) => Promise<void> | void
}

interface SettingsOption {
  id: string
  label: string
  icon: any
  description?: string
  onPress: () => void
}

interface DownloadCourseProps {
  id: string
  title: string
  instructor: string
  rating: number
  duration: string
  progress: number
  imageUrl: string
}
