import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

function Tela4_11() {
  const history = useHistory();
  return (
    <div>
      <Heading>POR FAVOR, INFORME O SEU SEXO</Heading>

      <BoxBottom>
        <Button
          text="SEXO MASCULINO"
          onClick={(e) => {
            e.preventDefault();
            // ate 12 anos: VITAMINAS KIDS
            // Entre 12 e 60 anos: VITAMINEAS A-Z
            // Acima de 60 anos: VITAMINAS SENIOR
            // NO PAINEL INDICA O SETOR: VITAMINAS E MINERAIS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'VITAMINEAS A-Z',
                setor: 'VITAMINAS E MINERAIS',
              },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="SEXO FEMININO"
          onClick={(e) => {
            e.preventDefault();
            // ate 12 anos: VITAMINAS KIDS
            // Entre 12 e 60 anos: VITAMINEAS A-Z
            // Acima de 60 anos: VITAMINAS SENIOR
            // NO PAINEL INDICA O SETOR: VITAMINAS E MINERAIS
            history.push({
              pathname: '/page-feedback',
              state: {
                procurarFarmaceutico: false,
                descricao: 'VITAMINEAS A-Z',
                setor: 'VITAMINAS E MINERAIS',
              },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
}

export default Tela4_11;
