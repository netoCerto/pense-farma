import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  as = 'h1',
  size = 'big',
  uppercase = false,
  marginTop = '50px',
  paddingBottom = '40px',
  width = '100%',
  bottom = false,
}) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      marginTop={marginTop}
      paddingBottom={paddingBottom}
      uppercase={uppercase}
      bottom={bottom}
      width={width}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
  bottom: P.bool,
  marginTop: P.string,
  paddingBottom: P.string,
  width: P.string,
};
