import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email obrigatório')
    .email('Digite um email válido'),
  password: yup.string().min(6, 'No mínimo 6 caracteres'),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email obrigatório')
    .email('Digite um email válido'),
  password: yup.string().min(6, 'Senha deve ter mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas deve ser iguais'),
});

export const naverSchema = yup.object().shape({
  job_role: yup.string().required('Campo obrigatório'),
  admission_date: yup.string().required('Campo obrigatório'),
  birthdate: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  project: yup.string().required('Campo obrigatório'),
  url: yup.string().required('Campo obrigatório').url(),
});
