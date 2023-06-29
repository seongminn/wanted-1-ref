import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/apis/auth';
import AuthForm from '@/components/auth/AuthForm';
import { PATH } from '@/constants/path';
import useInput from '@/hooks/useInput';

const SignupPage = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignup = () => {
    postSignup(credentials).then(() => {
      navigate(PATH.SIGNIN);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleSignup();
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="회원가입"
        email={credentials.email}
        password={credentials.password}
        onChange={onChange}
        onSubmit={onSubmit}
        testId="signup-button"
      />
    </section>
  );
};

export default SignupPage;
