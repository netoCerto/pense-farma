import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela2 = () => {
  const history = useHistory();

  const handleClickButtonSim = (e) => {
    e.preventDefault();

    history.push({
      pathname: '/page-feedback',
      state: { procurarFarmaceutico: true },
    });
  };

  const handleClickButtonNao = (e) => {
    e.preventDefault();

    history.push('/page-3');
  };

  return (
    <div>
      <GoBack />
      <Heading>
        VOCÊ TEM ALGUMA DOENÇA CRÕNICA, COMO DIABETES, HIPERTENSÃO, ASMA,
        CARDIOPATIA OU OUTRAS?
      </Heading>
      <BoxBottom>
        <Button text="SIM" onClick={handleClickButtonSim} around={true} />
      </BoxBottom>
      <BoxBottom>
        <Button text="NÃO" onClick={handleClickButtonNao} around={true} />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela2;
