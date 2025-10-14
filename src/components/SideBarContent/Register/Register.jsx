import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import InputCommon from '@components/InputCommon/InputCommon';
import { useToast } from '@/contexts/ToastProvider';
import { register } from '@/apis/authService';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

function Register() {
  const { container, title, content, footerText } = styles;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      fullname: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string(),
      email: Yup.string()
        .email('Invalid email format.')
        .required('Email is required.'),
      username: Yup.string()
        .max(10, 'Username must be less than 10 characters.')
        .required('Username is required.'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required.'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match.')
        .required('This field is required.')
    }),
    onSubmit: async values => {
      if (isLoading) return;

      setIsLoading(true);
      const { confirm_password, ...body } = values;
      try {
        const response = await register(body);
        toast.success(response.data.message);
        setIsLoading(false);
      } catch (error) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    }
  });

  return (
    <div className={container}>
      <h1 className={title}>create new account</h1>
      <form className={content} onSubmit={formik.handleSubmit}>
        <InputCommon
          id={'fullname'}
          label={'Fullname'}
          type={'text'}
          formik={formik}
        />
        <InputCommon
          id={'username'}
          label={'Username'}
          type={'text'}
          isRequired={true}
          formik={formik}
        />
        <InputCommon
          id={'email'}
          label={'Email'}
          type={'text'}
          isRequired={true}
          formik={formik}
        />
        <InputCommon
          id={'password'}
          label={'Password'}
          type={'password'}
          isRequired={true}
          formik={formik}
        />
        <InputCommon
          id={'confirm_password'}
          label={'Confirm password'}
          type={'password'}
          isRequired={true}
          formik={formik}
        />
        <Button content={isLoading ? 'Loading...' : 'Sign Up'} type='submit' />
      </form>
      <div className={footerText}>Already have account?</div>
    </div>
  );
}

export default Register;
