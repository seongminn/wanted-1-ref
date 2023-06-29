import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/apis/auth';
import AuthForm from '@/components/auth/AuthForm';
import { PATH } from '@/constants/path';
import useInput from '@/hooks/useInput';

const SigninPage = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignin = () => {
    postSignin(credentials).then(() => {
      navigate(PATH.TODO, { replace: true });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleSignin();
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="로그인"
        email={credentials.email}
        password={credentials.password}
        onChange={onChange}
        onSubmit={onSubmit}
        testId="signin-button"
      />
    </section>
  );
};

export default SigninPage;
