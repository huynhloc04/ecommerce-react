import styles from './styles.module.scss';
import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';
import { login } from '@/apis/authService';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import * as Yup from 'yup';

function Login() {
  const { container, title, content, rememberMe, footer, footerText } = styles;
  const { setSidebarType } = useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format.')
        .required('Email is required.'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required.')
    }),
    onSubmit: async values => {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const response = await login(values);
        toast.success(response.data.message);
        setIsLoading(false);

        const { access_token: accessToken, refresh_token: refreshToken } =
          response.data.data;
        Cookies.set('accessToken', accessToken);
        Cookies.set('refreshToken', refreshToken);
      } catch (error) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    }
  });

  const handleRegisterAccount = () => {
    setSidebarType('Sign Up');
  };

  return (
    <div className={container}>
      <h1 className={title}>sign in</h1>
      <form className={content} onSubmit={formik.handleSubmit}>
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
        <div className={rememberMe}>
          <input type='checkbox' />
          Remember me
        </div>
        <Button content={isLoading ? 'Loading...' : 'Login'} type='submit' />
      </form>
      <div className={footer}>
        <div className={footerText}>Lost your password?</div>
        <div className={footerText} onClick={handleRegisterAccount}>
          Register account?
        </div>
      </div>
    </div>
  );
}

export default Login;
