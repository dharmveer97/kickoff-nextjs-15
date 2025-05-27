interface UseOnboardingSlidesProps {
  slidesLength: number
  onLastSlide?: () => void
}

interface UseOnboardingSlidesReturn<T> {
  currentIndex: number
  scrollX: import('react-native').Animated.Value
  slidesRef: import('react').RefObject<
    import('react-native').FlatList<T> | null
  >
  width: number
  viewableItemsChanged: (info: {
    viewableItems: import('react-native').ViewToken[]
  }) => void
  viewConfig: { viewAreaCoveragePercentThreshold: number }
  scrollToNext: () => void
  scrollToPrev: () => void
}

interface OnboardingLayoutProps {
  children?: React.ReactNode
}

interface Data {
  id: number
  image: any
  title: string
  logo: any
  color: string
}

interface OnboardingDataTypes {
  item: Data
  width: number
}

interface OnboardingControlsProps {
  scrollToPrev: () => void
  scrollToNext: () => void
  currentIndex: number
}
