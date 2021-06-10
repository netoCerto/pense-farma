import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_5 = () => {
  const history = useHistory();
  return (
    <div>
      <Heading>COMO ESTA O ASPECTO DA SUA TOSSE?</Heading>
      <BoxBottom>
        <Button
          text="TOSSE SECA"
          onClick={(e) => {
            e.preventDefault();
            // XAROPES TOSSE SECA
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'XAROPES TOSSE SECA',
                setor: 'GRIPE E RESFRIADOS',
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="TOSSE COM SERCREÇÃO"
          onClick={(e) => {
            e.preventDefault();
            // XAROPES TOSSE COM SECREÇÃO
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'XAROPES TOSSE COM SECREÇÃO',
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

export default Tela4_5;
