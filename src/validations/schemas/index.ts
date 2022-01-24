import * as yup from 'yup'

export const userRegistrationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(4).max(10).required(),
})

export const userSignInSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(4).max(10).required(),
})
