import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_7 = () => {
  const history = useHistory();
  return (
    <div>
      <GoBack />
      <Heading>POR FAVOR, NOS DÊ MAIS DETALHES SOBRE A O SEU MAL ESTAR</Heading>

      <BoxBottom>
        <Button
          text="INTENSO, MAIS DE 1 DIA"
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
          text="LEVE, INICIOU HOJE"
          onClick={(e) => {
            e.preventDefault();
            // if 12 anos > procure farmarceutico
            // 12 anos < MEDICAMENTOS PARA NÁUSEA
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'PROCURE FARMACEUTICO',
                setor: 'SISTEMA DIGESTIVO',
              },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_7;
