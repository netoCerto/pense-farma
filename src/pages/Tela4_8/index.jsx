import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_8 = () => {
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
            // MEDICAMENTOS RECUPERAÇÃO FLORA INTESTINAL
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'MEDICAMENTOS RECUPERAÇÃO FLORA INTESTINAL',
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

export default Tela4_8;
