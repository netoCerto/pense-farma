import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { BoxBottom, Imagem, ContentImagem } from '../../styles/global-styles';
import Seta from '../../assets/images/arrow-down.svg';
import { Redirect } from '../../components/Redirect';
import { GoBack } from '../../components/GoBack';

const Tela4_3_1 = () => {
  const history = useHistory();
  const location = useLocation();
  const [tempo, setTempo] = useState(null);
  const [medicamento, setMendicamento] = useState(null);

  const nextPage = async (t) => {
    await setMendicamento(t);
    if (tempo == 'MENOS DE 3 DIAS' && t == 'NÃO') {
      switch (location.state.sintoma) {
        case 'DOR DE CABEÇA':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: DOR E FEBRE
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'DOR E FEBRE',
            },
          });
          break;
        case 'DOR MUSCULAR':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: DOR E FEBRE
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'DOR E FEBRE',
            },
          });
          break;
        case 'DOR ABDOMINAL (CÓLICA)':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'SISTEMA DIGESTIVO',
            },
          });
          break;
        case 'DOR DE ESTOMAGO':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'SISTEMA DIGESTIVO',
            },
          });
          break;
        case 'DOR DE GARGANTA':
          history.push('/page-4-3-2');
          break;
        case 'DOR NO PEITO':
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: true,
            },
          });
          break;
        case 'DOR DE DENTE':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: DOR E FEBRE
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'DOR E FEBRE',
            },
          });
          break;
        case 'DOR DE OUVIDO':
          // MEDICAMENTOS
          // NO PAINEL INDICA O SETOR: DOR E FEBRE
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'MEDICAMENTOS',
              setor: 'DOR E FEBRE',
            },
          });
          break;
        case 'FERIMENTO':
          // PRIMEIROS SOCORROS
          // NO PAINEL INDICA O SETOR: PRIMEIROS SOCORROS
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: false,
              descricao: 'PRIMEIROS SOCORROS',
              setor: 'PRIMEIROS SOCORROS',
            },
          });
          break;
        case 'DOR AO URINAR':
          history.push({
            pathname: '/page-feedback',
            state: {
              procurarFarmaceutico: true,
            },
          });
          break;
      }
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
      <Heading>EXPLIQUE UM POUCO MELHOR SOBRE ESTA DOR</Heading>

      <BoxBottom>
        <Heading
          size={'medium'}
          as={'h2'}
          // marginTop={'-30px'}
          // paddingBottom={'20px'}
          width={'390px;'}
        >
          POR QUANTO TEMPO?
        </Heading>
        <Heading
          size={'medium'}
          as={'h2'}
          // marginTop={'-30px'}
          // paddingBottom={'20px'}
          width={'390px;'}
        >
          JÁ TOMOU ALGUM MEDICAMENTO PARA DOR?
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
          text="MENOS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            setTempo('MENOS DE 3 DIAS');
          }}
          customWidth={'370px'}
          opacity={tempo == 'MENOS DE 3 DIAS' ? '1' : '0.5'}
        />

        <Button
          text="SIM"
          onClick={(e) => {
            e.preventDefault();
            if (tempo == null) {
              alert('Selecione o tempo');
            } else {
              nextPage('SIM');
            }
          }}
          customWidth={'370px'}
          opacity={medicamento == 'SIM' ? '1' : '0.5'}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="MAIS DE 3 DIAS"
          onClick={(e) => {
            e.preventDefault();
            setTempo('ACIMA DE 38 °C');
          }}
          customWidth={'370px'}
          opacity={tempo == 'MAIS DE 3 DIAS' ? '1' : '0.5'}
        />

        <Button
          text="NÃO"
          onClick={(e) => {
            e.preventDefault();
            if (medicamento == null) {
              alert('Selecione o tempo');
            } else {
              nextPage('NÃO');
            }
          }}
          customWidth={'370px'}
          opacity={medicamento == 'NÃO' ? '1' : '0.5'}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_3_1;
