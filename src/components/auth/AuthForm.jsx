import PropTypes from 'prop-types';

const AuthForm = ({ title, email, password, onChange, onSubmit, testId }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>
      <label htmlFor="email">이메일</label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={onChange}
        placeholder="이메일을 입력해주세요!"
        data-testid="email-input"
      />
      {/* <p className={`form-log ${!isValidateEmail && 'error'}`}>
        {!isValidateEmail ? AUTH_MESSAGE.EMAIL_ERROR : AUTH_MESSAGE.EMAIL_SUCCESS}
      </p> */}

      <label htmlFor="password">비밀번호</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        placeholder="비밀번호를 입력해주세요!"
        data-testid="password-input"
      />
      {/* <p className={`form-log ${!isValidatePassword && 'error'}`}>
        {!isValidatePassword ? AUTH_MESSAGE.PASSWORD_ERROR : AUTH_MESSAGE.PASSWORD_SUCCESS}
      </p> */}

      <button data-testid={testId}>제출</button>
    </form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};
