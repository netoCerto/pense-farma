import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';
import { DivOne, DivTwo, Global } from './styles';

const TelaFeedback = () => {
  const history = useHistory();
  const location = useLocation();

  const layoutFarmaceutico = () => {
    return (
      <Global>
        <DivOne>
          <Heading size={'huge'}>
            PROCURE UM
            <br />
            FARMACÊUTICO
          </Heading>
        </DivOne>
        <DivTwo>
          <Heading a={'h2'}>POSSO AJUDAR</Heading>
        </DivTwo>
      </Global>
    );
  };

  const layoutSetor = () => {
    return (
      <Global>
        <DivOne>
          <Heading size={'huge'}>{location.state.descricao}</Heading>
        </DivOne>
        <DivTwo>
          <Heading a={'h2'}>SETOR: {location.state.setor}</Heading>
          <BoxBottom>
            <Button
              text="VOLTAR PARA O INICIO"
              onClick={(e) => {
                e.preventDefault();
                history.push('/');
              }}
            />
          </BoxBottom>
        </DivTwo>
      </Global>
    );
  };

  return (
    <div>
      {location.state.procurarFarmaceutico
        ? layoutFarmaceutico()
        : layoutSetor()}
      <Redirect />
    </div>
  );
};

export default TelaFeedback;
