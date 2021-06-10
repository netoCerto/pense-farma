import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_10 = () => {
  const history = useHistory();
  return (
    <div>
      <Heading>POR FAVOR, SELECIONE O SEU SINTOMA</Heading>
      <BoxBottom>
        <Button
          text="AZIA"
          onClick={(e) => {
            e.preventDefault();
            // if 12 anos > procure farmarceutico
            // 12 anos < MEDICAMENTOS PARA AZIA
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'MEDICAMENTOS PARA AZIA',
                setor: 'SISTEMA DIGESTIVO',
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="MÁ DIGESTÃO"
          onClick={(e) => {
            e.preventDefault();
            // if 12 anos > procure farmarceutico
            // 12 anos < MEDICAMENTOS PARA DIGESTÃO
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'MEDICAMENTOS PARA DIGESTÃO',
                setor: 'SISTEMA DIGESTIVO',
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="GASES"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS PARA CÓLICAS E GASES
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'MEDICAMENTOS PARA CÓLICAS E GASES',
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

export default Tela4_10;
