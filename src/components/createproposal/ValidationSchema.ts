import * as Yup from 'yup'

export const ValidationSchema = Yup.object().shape({
    issueLink: Yup.string()
      .url('Must be a valid URL')
      .test(
        'is-github-url',
        'The URL must be a GitHub URL',
        (value) => !value || value.includes('github.com')
      ).required('GitHub URL is required'),
    maxAmount: Yup.number().test(
        'is-greater-than-0',
        'maximum amount must be greater than 0',
        (value) => value != null && value > 0
      ).required('Max amount is required'),
    minAmount: Yup.number().test(
        'is-greater-than-0',
        'minimum amount must be greater than 0',
        (value) => value != null && value > 0
      ).required('Min amount is required'),
    hour: Yup.number()
      .test(
        'is-greater-than-0',
        'Hour must be at least 1',
        (value) => value != null && value > 0
      )
      .required('Hour is required'),
    fee: Yup.number().required('Fee is required'),
  });