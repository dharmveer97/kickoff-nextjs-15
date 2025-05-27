interface CourseConfig {
  tabLabelData: TabLabelDataType[]
  tabScreenData: Record<string, CourseCardDataType[]>
}

interface CourseDetailsWidgetProps {
  title?: string
  instructor?: string
  rating?: string
}

interface CourseOverviewProps {
  instructor?: string
  rating?: string
}

type CourseConfigMap = Record<string, CourseConfig>
