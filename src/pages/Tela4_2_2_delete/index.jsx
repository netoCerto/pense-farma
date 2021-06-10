import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

const Tela4_2_2 = () => {
  const history = useHistory();
  const [temperaturaAferida, setTemperaturaAferida] = useState(null);
  const [tempo, setTempo] = useState(null);

  const nextPage = () => {
    if (temperaturaAferida == 'ATÉ 38 °C' && tempo == 'MENOS DE 3 DIAS') {
      // MEDICAMENTOS VIROSE + MEDICAMENTO FEBRE
      history.push('/page-feedback');
    } else {
      history.push('/page-feedback');
    }
  };

  return (
    <div>
      <Heading>EXPLIQUE UM POUCO MELHOR SOBRE ESTA FEBRE</Heading>

      <Heading>QUAL A TEMPERATURA AFERIDA?</Heading>
      <Button
        text="ATÉ 38 °C"
        onClick={(e) => {
          e.preventDefault();
          setTemperaturaAferida('ATÉ 38 °C');
        }}
      />
      <Button
        text="ACIMA DE 38 °C"
        onClick={(e) => {
          e.preventDefault();
          setTemperaturaAferida('ACIMA DE 38 °C');
        }}
      />

      <Heading>POR QUANTO TEMPO?</Heading>
      <Button
        text="MENOS DE 3 DIAS"
        onClick={(e) => {
          e.preventDefault();
          if (temperaturaAferida == null) {
            alert('Selecione uma temperatura');
          } else {
            setTempo('MENOS DE 3 DIAS');
            nextPage();
          }
        }}
      />
      <Button
        text="MAIS DE 3 DIAS"
        onClick={(e) => {
          e.preventDefault();
          if (temperaturaAferida == null) {
            alert('Selecione uma temperatura');
          } else {
            setTempo('MAIS DE 3 DIAS');
            nextPage();
          }
        }}
      />
    </div>
  );
};

export default Tela4_2_2;
