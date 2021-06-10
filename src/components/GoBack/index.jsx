import P from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import ImgBack from '../../assets/images/arrow-left.svg';

export const GoBack = () => {
  const history = useHistory();
  return (
    <Styled.ButtonContainer>
      <Styled.ButtonText href="#">
        <Styled.Image
          src={ImgBack}
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        />
      </Styled.ButtonText>
    </Styled.ButtonContainer>
  );
};
