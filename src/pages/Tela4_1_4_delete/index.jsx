import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

const Tela4_1_4 = () => {
  const history = useHistory();

  return (
    <div>
      <Heading>COMO ESTA O ASPECTO DA SUA TOSSE?</Heading>
      <Button
        text="TOSSE SECA"
        onClick={(e) => {
          e.preventDefault();
          // MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE SECA + ASSOCIADOS
          // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
          history.push('/page-feedback');
        }}
      />
      <Button
        text="TOSSE COM SERCREÇÃO"
        onClick={(e) => {
          e.preventDefault();
          // MEDICAMENTOS GRIPE + MEDICAMENTOS PARA TOSSE COM SECREÇÃO + ASSOCIADOS
          // NO PAINEL INDICA O SETOR: GRIPE E RESFRIADOS
          history.push('/page-feedback');
        }}
      />
    </div>
  );
};

export default Tela4_1_4;
