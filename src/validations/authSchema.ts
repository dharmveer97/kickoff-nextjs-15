import * as Yup from 'yup'

export const setNewPasswordValidationSchema: Yup.ObjectSchema<SetNewPasswordFormTypes> =
  Yup.object({
    newPassword: Yup.string()
      .required('New Password is required')
      .min(6, 'Password must be at least 6 characters')
      .test(
        'has-lowercase',
        'Password must contain at least one lowercase letter',
        (value) => /[a-z]/.test(value || ''),
      )
      .test(
        'has-uppercase',
        'Password must contain at least one uppercase letter',
        (value) => /[A-Z]/.test(value || ''),
      )
      .test(
        'has-number',
        'Password must contain at least one number',
        (value) => /\d/.test(value || ''),
      )
      .test(
        'has-special-char',
        'Password must contain at least one special character (@$!%*?&)',
        (value) => /[@$!%*?&]/.test(value || ''),
      ),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm Password is required'),
  })

export const changePasswordValidationSchema: Yup.ObjectSchema<AccountSecurityFormTypes> =
  Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string().min(6, 'Minimum 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword')], 'Passwords must match')
      .when('newPassword', {
        is: (val: string) => val && val.length > 0,
        then: (schema) => schema.required('Retype your new password'),
      }),
  })

export const editProfileValidationSchema: Yup.ObjectSchema<EditProfileFormTypes> =
  Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.string().required('Date of birth is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    address: Yup.string().required('Address is required'),
    headline: Yup.string().required('Headline is required'),
    profileImage: Yup.string().required('Profile image is required'),
  })

export const recoveryEmailValidationSchema: Yup.ObjectSchema<EmailFormType> =
  Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
  })

export const verifyIdentityValidationSchema: Yup.ObjectSchema<VerifyIdentityFormTypes> =
  Yup.object({
    firstName: Yup.string().required('First Name is required'),
    middleName: Yup.string().optional(),
    lastName: Yup.string().required('Last Name is required'),
    confirmLegalName: Yup.boolean()
      .oneOf([true], 'You must confirm your legal name and age')
      .required('You must confirm your legal name and age'),
  })

export const findAccountValidationSchema: Yup.ObjectSchema<EmailFormType> =
  Yup.object({
    email: Yup.string()

      .email('Please enter a valid email address')
      .required('Email is required'),
  })

export const loginValidationSchema: Yup.ObjectSchema<LoginFormTypes> =
  Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'At least 6 characters required')
      .required('Password is required'),
  })

export const registerValidationSchema: Yup.ObjectSchema<RegisterFormTypes> =
  Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^\+?[1-9][0-9]{7,14}$/, 'Phone number is not valid')
      .required('Phone number is required'),
    countryCode: Yup.string().required('Country Code is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one letter and one number',
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms')
      .required('You must accept the terms'),
  })
