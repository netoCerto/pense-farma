import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_1 = () => {
  const history = useHistory();

  return (
    <div>
      <Heading>OS SEUS SINTOMAS, INDICAM UM QUADRO DE GRIPE LEVE.</Heading>
      <Heading>
        EM ALGUM MOMENTO VOCÊ SENTIU FALTA DE AR, DOR NO PEITO OU DOR DE
        GARGANTA MUITO FORTE?
      </Heading>
      <BoxBottom>
        <Button
          text="SIM"
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: '/page-feedback',
              state: { procurarFarmaceutico: true },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="NÃO"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-1-1');
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_1;
