import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

const Tela4_1_2 = () => {
  const history = useHistory();
  const alert = useAlert();
  const [temperaturaAferida, setTemperaturaAferida] = useState(null);
  const [tempo, setTempo] = useState(null);

  const nextPage = () => {
    if (temperaturaAferida == 'ATÉ 38 °C' && tempo == 'MENOS DE 3 DIAS') {
      history.push('/page-4-1-3');
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
            alert.show('Selecione a temperatura aferida');
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
            alert.show('Selecione a temperatura aferida');
          } else {
            setTempo('MAIS DE 3 DIAS');
            nextPage();
          }
        }}
      />
    </div>
  );
};

export default Tela4_1_2;
