type TextAlign = 'center' | 'left' | 'right'

type InputVariant = 'underlined' | 'outline' | 'rounded'

type BorderColor =
  | 'border-black'
  | 'border-danger'
  | 'border-transparent'
  | 'border-white'
  | 'border-lightAzure-400'
  | 'dark:border-primary-100'

type InputBg =
  | 'bg-primary'
  | 'bg-gray-100'
  | 'bg-white'
  | 'bg-lightAzure-400'
  | 'bg-red-500'

interface InputGroupProps {
  label?: string
  value: string
  onChangeText: (text: string) => void
  onBlur?: (e: any) => void
  onSubmitEditing?: (e: any) => void
  onClear?: (e: any) => void
  startContent?: ReactNode
  placeholder?: string
  isPassword?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  error?: string
  touched?: boolean
  iconName?: string
  variant?: InputVariant
  borderColor?: BorderColor
  backgroundColor?: InputBg
  inputClassName?: string
  isRequired?: boolean
}

interface DropdownProps {
  label?: string
  options: OptionType[]
  value?: string
  onValueChange?: (val: string) => void
  placeholder?: string
  selectedLabelClassName?: string
  optionClassName?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'underlined' | 'outline' | 'rounded'
  className?: string
  error?: string
  touched?: boolean
  isRequired?: boolean
  borderless?: boolean
  customIconName?: Ionicons
  fullWidth?: boolean
  startContent?: ReactNode
  endContent?: ReactNode
  onStartContentPress?: () => void
  onEndContentPress?: () => void
}

interface IconWithLabelProps {
  icon: string
  label: string
}

interface CheckboxGroupProps {
  name: string
  value: boolean
  onChange: (checked: boolean) => void
  touched?: boolean
  error?: string
  children: ReactNode
  textStyle?: TextStyle
  errorAlign?: 'left' | 'center'
}

interface CountryPickerProps {
  value: string
  onChange: (value: string) => void
}
interface CustomToastProps {
  title?: string
  message: string
  placement?: 'top' | 'bottom'
  duration?: number
  variant?: 'solid' | 'outline' | undefined
  action?: 'success' | 'warning' | 'error' | 'info' | 'muted' | undefined
}
interface InfoCardProps {
  info: InfoCardType
  className?: string
  titleClassName?: string
  subTitleClassName?: string
  descriptionClassName?: string
  showLine?: boolean
}

interface InfoDescriptionProps {
  title?: string
  subTitle?: string | string[]
  description?: string
}
interface ListTileProps {
  className?: string
  title: string
  isSwitch?: boolean
  content?: string
  isTrailingIcon?: boolean
  onPress?: () => void
  isDanger?: boolean
  isSecondary?: boolean
  trailingIcon?: MaterialCommunityIcons
  leadingIcon?: MaterialCommunityIcons
}

interface MarkdownTextProps extends Omit<TextProps, 'children'> {
  text: string
  color?: string
}

interface SelectGroupProps {
  label?: string
  options: { label: string; value: string }[]
  value: string
  onChange: (val: string) => void
  placeholder?: string
  error?: string
  touched?: boolean
  isRequired?: boolean
  variant?: 'underlined' | 'outline' | 'rounded'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

interface WithSkeletonProps {
  height?: number
  width?: number
  delay?: number
  className?: string
  children: React.ReactNode
}
interface StarRatingProps {
  rating: number
  size?: number
}

interface ProfileImageUploaderProps {
  value: string
  onChange: (uri: string) => void
  size?: number
  disabled?: boolean
}

interface CalendarInputProps {
  label?: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  error?: string
  touched?: boolean
  isRequired?: boolean
  placeholder?: string
}
