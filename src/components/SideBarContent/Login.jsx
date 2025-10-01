import styles from './styles.module.scss';
import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';

function Login() {
  const { container, title, content, rememberMe, lostPass } = styles;
  return (
    <div className={container}>
      <h1 className={title}>sign in</h1>
      <div className={content}>
        <InputCommon label={'Email'} type={'text'} isRequired={true} />
        <InputCommon label={'Password'} type={'password'} isRequired={true} />
        <div className={rememberMe}>
          <input type='checkbox' />
          Remember me
        </div>
        <Button content={'Login'} />
        <div className={lostPass}>Lost your password?</div>
      </div>
    </div>
  );
}

export default Login;
