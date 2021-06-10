import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_2 = () => {
  const history = useHistory();

  return (
    <div>
      <GoBack />
      <Heading>
        VOCÊ OBSERVOU MANCHAS VERMELHAS PELO CORPO OU ESTA COM NÁUSEA MUITO
        FORTE?
      </Heading>
      <BoxBottom>
        <Button
          text="SIM"
          size={'20px'}
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: true,
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="NÃO"
          size={'20px'}
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-2-1');
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_2;
