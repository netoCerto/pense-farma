import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { BoxBottom, Imagem, ContentImagem } from '../../styles/global-styles';
import Seta from '../../assets/images/arrow-down.svg';
import { Redirect } from '../../components/Redirect';
import { GoBack } from '../../components/GoBack';

const Tela4_12 = () => {
  const history = useHistory();
  const alert = useAlert();
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
      <GoBack />
      <Heading>POR FAVOR, NOS DÊ MAIS DETALHES SOBRE A IRRITAÇÃO</Heading>

      <BoxBottom>
        <Heading
          size={'medium'}
          as={'h2'}
          // marginTop={'-30px'}
          // paddingBottom={'20px'}
          width={'390px;'}
        >
          QUAL O ASPECTO DO OLHO IRRITADO?
        </Heading>
        <Heading
          size={'medium'}
          as={'h2'}
          // marginTop={'-30px'}
          // paddingBottom={'20px'}
          width={'390px;'}
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
          customWidth={'370px'}
          opacity={aspectOlho == 'COM VERMELHIDÃO' ? '1' : '0.5'}
        />

        <Button
          text="MENOS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (aspectOlho == null) {
              alert.show('Selecione o aspecto do olho irritado');
            } else {
              nextPage('MENOS DE 3 DIAS');
            }
          }}
          customWidth={'370px'}
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
          customWidth={'370px'}
          opacity={aspectOlho == 'SEM VERMELHIDÃO' ? '1' : '0.5'}
        />

        <Button
          text="MAIS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            if (aspectOlho == null) {
              alert.show('Selecione o aspecto do olho irritado');
            } else {
              nextPage('MAIS DE 3 DIAS');
            }
          }}
          customWidth={'370px'}
          opacity={tempo == 'MAIS DE 3 DIAS' ? '1' : '0.5'}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_12;
