import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_9 = () => {
  const history = useHistory();
  return (
    <div>
      <GoBack />
      <Heading>POR FAVOR, INFORME UM POUCO MAIS SOBRE O SEU SINTOMA</Heading>

      <BoxBottom>
        <Button
          text="MAIS DE 4 DIAS"
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
          text="MENOS DE 4 DIAS"
          onClick={(e) => {
            e.preventDefault();
            // if 12 anos > procure farmarceutico
            // 12 anos < LAXATIVOS
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'LAXATIVOS',
                setor: 'SISTEMA DIGESTIVO',
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="RECORRENTE"
          onClick={(e) => {
            e.preventDefault();
            // if 12 anos > procure farmarceutico
            // 12 anos < FIBRAS, TRATAMENTO PRISÃO DE VENTRE
            // NO PAINEL INDICA O SETOR: NATURAIS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'FIBRAS, TRATAMENTO PRISÃO DE VENTRE',
                setor: 'NATURAIS',
              },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_9;
