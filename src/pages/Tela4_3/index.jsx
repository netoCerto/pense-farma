import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { GoBack } from '../../components/GoBack';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela4_3 = () => {
  const history = useHistory();

  return (
    <div>
      <GoBack />
      <Heading>CONTE-NOS ONDE ESTA LOCALIZADA A SUA DOR?</Heading>

      <BoxBottom>
        <Button
          text="DOR DE CABEÇA"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: DOR E FEBRE '/page-feedback'
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR DE CABEÇA' },
            });
          }}
        />
        <Button
          text="DOR MUSCULAR"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: DOR E FEBRE '/page-feedback'
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR MUSCULAR' },
            });
          }}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="DOR ABDOMINAL (CÓLICA)"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR ABDOMINAL (CÓLICA)' },
            });
          }}
        />
        <Button
          text="DOR DE ESTOMAGO"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: SISTEMA DIGESTIVO
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR DE ESTOMAGO' },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="DOR DE GARGANTA"
          onClick={(e) => {
            e.preventDefault();
            // '/page-4-3-2'
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR DE GARGANTA' },
            });
          }}
        />
        <Button
          text="DOR NO PEITO"
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR NO PEITO' },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="DOR DE DENTE"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: DOR E FEBRE
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR DE DENTE' },
            });
          }}
        />
        <Button
          text="DOR DE OUVIDO"
          onClick={(e) => {
            e.preventDefault();
            // MEDICAMENTOS
            // NO PAINEL INDICA O SETOR: DOR E FEBRE
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR DE OUVIDO' },
            });
          }}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="FERIMENTO"
          onClick={(e) => {
            e.preventDefault();
            // PRIMEIROS SOCORROS
            // NO PAINEL INDICA O SETOR: PRIMEIROS SOCORROS
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'FERIMENTO' },
            });
          }}
        />
        <Button
          text="DOR AO URINAR"
          onClick={(e) => {
            e.preventDefault();
            history.push({
              pathname: '/page-4-3-1',
              state: { sintoma: 'DOR AO URINAR' },
            });
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela4_3;
