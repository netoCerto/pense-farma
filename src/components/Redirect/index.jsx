import P from 'prop-types';
import IdleTimer from 'react-idle-timer';
import { useHistory, useLocation } from 'react-router-dom';

export const Redirect = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnIdle = (event) => {
    history.push('/');
  };

  const handleOnActive = (event) => {
    // console.log('user is active', event);
  };

  const handleOnAction = (event) => {
    // console.log('user did something', event);
  };

  return (
    <>
      <IdleTimer
        timeout={60000}
        onIdle={handleOnIdle}
        onActive={handleOnActive}
        onAction={handleOnAction}
        debounce={500}
      />
    </>
  );
};
