import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { BoxBottom } from '../../styles/global-styles';

const Home = () => {
  const history = useHistory();

  const handleClickButton = (e, idade) => {
    e.preventDefault();

    history.push('/page-2');
  };

  return (
    <div>
      <Heading>
        OLÁ! SEJA BEM VINDO.
        <br />
        <br />
        POR FAVOR NOS
        <br />
        INFORME A SUA FAIXA
        <br />
        ETÁRIA:
      </Heading>
      <BoxBottom>
        <Button
          text="ATÉ 12 ANOS"
          onClick={(e) => handleClickButton(e, 'até 12')}
          around={true}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="ENTRE 12 E 60 ANOS"
          onClick={(e) => handleClickButton(e, '12 a 60')}
          around={true}
        />
      </BoxBottom>
      <BoxBottom>
        <Button
          text="ACIMA DE 60 ANOS"
          onClick={(e) => handleClickButton(e, 'acima de 60')}
          around={true}
        />
      </BoxBottom>
    </div>
  );
};

export default Home;
