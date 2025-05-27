interface CourseCardType {
  id: number
  image: string
  title: string
  subTitle: string
}

interface QuizButtonCtaDataType {
  id: number
  label: string
  link?: string
}

interface TabLabelDataType {
  id: number
  label: string
}

interface CourseCardDataType {
  id: number
  thumbnail: string
  title: string
  duration: string
  rating: string
  instructor: string
  progress?: number
}

interface PendingCourseTestDataType {
  id: number
  title: string
  module: {
    name: string
    color: string
  }
  duration: string
}

interface learningTopicDataType {
  title: string
  values: string[]
}

interface FAQListDataType {
  label: string
  options: string[]
}

interface InfoCardType {
  id?: number
  title: string
  description?: string
  subTitle: string | (string | { label: string; description?: string })[]
  image?: string
}

interface ReviewDataType {
  id: number
  name: string
  date: string
  review: string
  comment: string
}
interface RatingProgressBarType {
  id?: number
  value: number
  reviews: number
}

interface RatingProgProps {
  rating: RatingProgressBarType
}

interface CourseContentDataType {
  label: string
  subTitle: string
  options: {
    whatYouWillLearn: {
      title: string
      values: string[]
    }
    skillsYouWillGain: {
      title: string
      values: string[]
    }
  }[]
}

interface OptionType {
  label: string
  value: string
  isDisabled?: boolean
}

interface CartFormTypes {
  discountCode: string
}

interface CartFormTypes {
  discountCode: string
}

interface QuizQuestionType {
  id: number
  question: string
  options: string[]
}
interface CourseDetailProps {
  title: string
  instructor: string
  rating: string
  isPaid?: boolean
}
