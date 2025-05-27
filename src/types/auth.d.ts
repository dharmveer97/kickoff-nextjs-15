interface AuthScreenLayoutProps {
  title: string
  image?: string
  subtitle?: string
  showBackButton?: boolean
  children: ReactNode
  align?: TextAlign
  withPadding?: boolean
}

interface EmailFormType {
  email: string
}

interface VerifyOtpType {
  email?: string
}

interface VerifyIdentityFormTypes {
  firstName: string
  middleName?: string | undefined
  lastName: string
  confirmLegalName: boolean
}

interface LoginFormTypes {
  email: string
  password: string
}

interface RegisterFormTypes {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  countryCode: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

interface SetNewPasswordFormTypes {
  newPassword: string
  confirmNewPassword: string
}
interface FormSubmissionProps<T> {
  loading: boolean
  onSubmit: (values: T) => void
  initialValues?: T
}

interface EditProfileFormTypes {
  firstName: string
  lastName: string
  gender: string
  dob: string
  country: string
  state: string
  address: string
  headline: string
  profileImage: string
}

interface MultiFactorFormTypes {
  mfaEnabled: boolean
}

interface AccountSecurityFormTypes {
  email: string
  currentPassword: string
  newPassword?: string | undefined
  confirmPassword?: string | undefined
}

type MultiFactorFormProps = FormSubmissionProps<FindAccountFormTypes>
type OtpVerificationFormProps = EmailFormType
type RecoveryEmailFormProps = FormSubmissionProps<RecoveryEmailFormTypes>
type FindAccountFormProps = FormSubmissionProps<FindAccountFormTypes>
type ResetPasswordFormProps = FormSubmissionProps<SetNewPasswordFormTypes>
type LoginFormProps = FormSubmissionProps<LoginFormTypes>
type RegisterFormProps = FormSubmissionProps<RegisterFormTypes>
type VerifyIdentityFormProps = FormSubmissionProps<VerifyIdentityFormTypes>
type EditProfileFormProps = FormSubmissionProps<EditProfileFormTypes>
type CartFormProps = FormSubmissionProps<CartFormTypes>
type AccountFormProps = FormSubmissionProps<AccountSecurityFormTypes>
