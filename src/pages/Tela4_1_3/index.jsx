import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_1_3 = () => {
  const history = useHistory();
  return (
    <div>
      <GoBack />
      <Heading>VOCÊ ESTA COM TOSSE CONSTANTE?</Heading>
      <BoxBottom>
        <Button
          text="NÃO"
          onClick={(e) => {
            // MEDICAMENTOS GRIPE + ASSOCIADOS
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            e.preventDefault();
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'MEDICAMENTOS GRIPE + ASSOCIADOS',
                setor: 'GRIPE E RESFRIADOS',
              },
            });
          }}
        />
      </BoxBottom>
      <Heading as={'h2'}>SE SIM:</Heading>
      <BoxBottom>
        <Button
          text="TOSSE SECA"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE SECA + ASSOCIADOS
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao:
                  'MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE SECA + ASSOCIADOS',
                setor: 'GRIPE E RESFRIADOS',
              },
            });
          }}
        />
        <Button
          text="TOSSE COM SERCREÇÃO"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE COM SECREÇÃO + ASSOCIADOS
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao:
                  'MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE COM SECREÇÃO + ASSOCIADOS',
                setor: 'GRIPE E RESFRIADOS',
              },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_1_3;
