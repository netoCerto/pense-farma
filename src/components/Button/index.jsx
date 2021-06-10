import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({
  text,
  onClick,
  around = false,
  cutomPadding = '20px 30px',
  size = '16px',
  customWidth = '350px',
  opacity = '1',
}) => {
  return (
    <Styled.ButtonContainer around={around} opacity={opacity}>
      <Styled.ButtonText
        href="#"
        onClick={onClick}
        cutomPadding={cutomPadding}
        size={size}
        customWidth={customWidth}
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
  customWidth: P.string,
  size: P.string,
  opacity: P.string,
};
