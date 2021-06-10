import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';

import { BoxBottom } from '../../styles/global-styles';
const Tela4_6 = () => {
  const history = useHistory();
  return (
    <div>
      <GoBack />
      <Heading>POR QUANTO TEMPO VOCÊ ESTA COM ESSE SINTOMA?</Heading>
      <BoxBottom>
        <Button
          text="MAIS DE 7 DIAS"
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
          text="MENOS DE 7 DIAS"
          onClick={(e) => {
            e.preventDefault();
            // SOLUÇÕES NASAIS DECONGESTONANTES
            // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'SOLUÇÕES NASAIS DECONGESTONANTES',
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

export default Tela4_6;
