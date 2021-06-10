import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { BoxBottom, Imagem, ContentImagem } from '../../styles/global-styles';
import Seta from '../../assets/images/seta.png';
import { Redirect } from '../../components/Redirect';

const Tela4_12 = () => {
  const history = useHistory();
  const [aspectOlho, setAspectOlho] = useState(null);
  const [tempo, setTempo] = useState(null);

  const nextPage = async (t) => {
    await setTempo(t);
    if (aspectOlho == 'SEM VERMELHIDÃO' && t == 'MENOS DE 3 DIAS') {
      // COLÍRIOS
      // NO PAINEL INDICA O SETOR: CUIDADOS COM OS OLHOS
      history.push({
        pathname: '/page-feedback',
        state: {
          procurarFarmaceutico: false,
          descricao: 'COLÍRIOS',
          setor: 'CUIDADOS COM OS OLHO',
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
      <Heading>POR FAVOR, NOS DÊ MAIS DETALHES SOBRE A IRRITAÇÃO</Heading>

      <BoxBottom>
        <Heading
          size={'medium'}
          as={'h2'}
          marginTop={'-30px'}
          paddingBottom={'20px'}
          width={'350px;'}
        >
          QUAL O ASPECTO DO OLHO IRRITADO?
        </Heading>
        <Heading
          size={'medium'}
          as={'h2'}
          marginTop={'-30px'}
          paddingBottom={'20px'}
          width={'350px;'}
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
          text="COM VERMELHIDÃO"
          onClick={(e) => {
            e.preventDefault();
            setAspectOlho('COM VERMELHIDÃO');
          }}
          opacity={aspectOlho == 'COM VERMELHIDÃO' ? '1' : '0.5'}
        />

        <Button
          text="MENOS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (tempo == null) {
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
          text="SEM VERMELHIDÃO"
          onClick={(e) => {
            e.preventDefault();
            setAspectOlho('SEM VERMELHIDÃO');
          }}
          opacity={aspectOlho == 'SEM VERMELHIDÃO' ? '1' : '0.5'}
        />

        <Button
          text="MAIS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (tempo == null) {
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

export default Tela4_12;
