import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({
  text,
  onClick,
  around = false,
  cutomPadding = '20px 30px',
  size = '16px',
  opacity = '1',
}) => {
  return (
    <Styled.ButtonContainer around={around} opacity={opacity}>
      <Styled.ButtonText
        href="#"
        onClick={onClick}
        cutomPadding={cutomPadding}
        size={size}
      >
        {text}
      </Styled.ButtonText>
    </Styled.ButtonContainer>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  around: P.bool,
  cutomPadding: P.string,
  size: P.string,
  opacity: P.string,
};
