import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { BoxBottom, Imagem, ContentImagem } from '../../styles/global-styles';
import Seta from '../../assets/images/seta.png';
import { Redirect } from '../../components/Redirect';

const Tela4_4 = () => {
  const history = useHistory();
  const [temperaturaAferida, setTemperaturaAferida] = useState(null);
  const [tempo, setTempo] = useState(null);

  const nextPage = async (t) => {
    await setTempo(t);
    if (temperaturaAferida == 'ATÉ 38 °C' && t == 'MENOS DE 3 DIAS') {
      // MEDICAMENTOS FEBRE
      // NO PAINEL INDICA O SETOR: DOR E FEBRE
      history.push({
        pathname: '/page-feedback',
        state: {
          procurarFarmaceutico: false,
          descricao: 'MEDICAMENTOS FEBRE',
          setor: 'DOR E FEBRE',
        },
      });
    } else {
      history.push({
        pathname: '/page-feedback',
        state: {
          procurarFarmaceutico: true,
        },
      });
    }
  };

  return (
    <div>
      <Heading>EXPLIQUE UM POUCO MELHOR SOBRE A SUA FEBRE</Heading>

      <BoxBottom>
        <Heading
          size={'medium'}
          as={'h2'}
          marginTop={'-30px'}
          paddingBottom={'20px'}
          width={'410px'}
        >
          QUAL A TEMPERATURA AFERIDA?
        </Heading>
        <Heading
          size={'medium'}
          as={'h2'}
          marginTop={'-30px'}
          paddingBottom={'20px'}
          width={'410px'}
        >
          POR QUANTO TEMPO?
        </Heading>
      </BoxBottom>
      <BoxBottom>
        <ContentImagem>
          <Imagem src={Seta} />
        </ContentImagem>
        <ContentImagem>
          <Imagem src={Seta} />
        </ContentImagem>
      </BoxBottom>

      <BoxBottom>
        <Button
          text="ATÉ 38 °C"
          onClick={(e) => {
            e.preventDefault();
            setTemperaturaAferida('ATÉ 38 °C');
          }}
          opacity={temperaturaAferida == 'ATÉ 38 °C' ? '1' : '0.5'}
        />

        <Button
          text="MENOS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (temperaturaAferida == null) {
              alert('Selecione uma temperatura aferida');
            } else {
              nextPage('MENOS DE 3 DIAS');
            }
          }}
          opacity={tempo == 'MENOS DE 3 DIAS' ? '1' : '0.5'}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="ACIMA DE 38 °C"
          onClick={(e) => {
            e.preventDefault();
            setTemperaturaAferida('ACIMA DE 38 °C');
          }}
          opacity={temperaturaAferida == 'ACIMA DE 38 °C' ? '1' : '0.5'}
        />

        <Button
          text="MAIS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (temperaturaAferida == null) {
              alert('Selecione uma temperatura aferida');
            } else {
              nextPage('MAIS DE 3 DIAS');
            }
          }}
          opacity={tempo == 'MAIS DE 3 DIAS' ? '1' : '0.5'}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_4;
