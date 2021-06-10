import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_13 = () => {
  const history = useHistory();
  return (
    <div>
      <Heading>POR FAVOR, INFORME UM POUCO MAIS SOBRE O SEU SINTOMA</Heading>

      <BoxBottom>
        <Button
          text="MENOS DE 3 DIAS"
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
          text="MAIS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            // ANTI HISTAMÍNICOS
            // NO PAINEL INDICA O SETOR: DOR E FEBRE
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'ANTI HISTAMÍNICOS',
                setor: 'DOR E FEBRE',
              },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_13;
