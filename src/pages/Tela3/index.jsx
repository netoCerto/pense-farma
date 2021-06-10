import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Redirect } from '../../components/Redirect';
import { BoxBottom } from '../../styles/global-styles';

const Tela3 = () => {
  const history = useHistory();

  return (
    <div>
      <Heading marginTop={'40px'} paddingBottom={'20px'}>
        CONTE NOS O SEU PRINCIPAL SINTOMA:
      </Heading>

      <BoxBottom>
        <Button
          text="MAL ESTAR
DOR DE CABEÇA E/OU NO CORPO
CORIZA OU CONGESTÃO NASAL
ESPIRROS E/OU TOSSE
"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-1');
          }}
          // cutomPadding={'10px 30px'}
          // size={'14px'}
        />
        <Button
          text="MAL ESTAR
DIARRÉIA
FEBRE E/OU NÁUSEA
"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-2');
          }}
        />
        <Button
          text="DOR"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-3');
          }}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="FEBRE"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-4');
          }}
        />

        <Button
          text="TOSSE"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-5');
          }}
        />
        <Button
          text="CORIZA OU
CONGESTÃO NASAL
"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-6');
          }}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="NÁUSEA"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-7');
          }}
        />
        <Button
          text="DIARRÉIA"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-8');
          }}
        />
        <Button
          text="PRISÃO DE VENTRE"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-9');
          }}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="AZIA
MÁ DIGESTÃO
GASES"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-10');
          }}
        />
        <Button
          text="CANSAÇO FÍSICO
DES NIMO
FALTA DE APETITE"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-11');
          }}
        />
        <Button
          text="IRRITAÇÃO OCULAR"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-12');
          }}
        />
      </BoxBottom>

      <BoxBottom>
        <Button
          text="COCEIRA"
          onClick={(e) => {
            e.preventDefault();
            history.push('/page-4-13');
          }}
        />
      </BoxBottom>
      <Redirect />
    </div>
  );
};

export default Tela3;
