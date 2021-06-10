import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tela2 from './pages/Tela2';
import Tela3 from './pages/Tela3';
import Tela4_1 from './pages/Tela4_1';
import Tela4_10 from './pages/Tela4_10';
import Tela4_11 from './pages/Tela4_11';
import Tela4_12 from './pages/Tela4_12';
import Tela4_13 from './pages/Tela4_13';
import Tela4_1_1 from './pages/Tela4_1_1';
// import Tela4_1_2 from './pages/Tela4_1_2_delete';
import Tela4_1_3 from './pages/Tela4_1_3';
// import Tela4_1_4 from './pages/Tela4_1_4_delete';
import Tela4_2 from './pages/Tela4_2';
import Tela4_2_1 from './pages/Tela4_2_1';
// import Tela4_2_2 from './pages/Tela4_2_2_delete';
import Tela4_3 from './pages/Tela4_3';
import Tela4_3_1 from './pages/Tela4_3_1';
import Tela4_3_2 from './pages/Tela4_3_2';
// import Tela4_3_3 from './pages/Tela4_3_3_delete';
import Tela4_4 from './pages/Tela4_4';
import Tela4_5 from './pages/Tela4_5';
import Tela4_6 from './pages/Tela4_6';
import Tela4_7 from './pages/Tela4_7';
import Tela4_8 from './pages/Tela4_8';
import Tela4_9 from './pages/Tela4_9';
import TelaFeedback from './pages/TelaFeedback';

const Routers = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page-2" component={Tela2} />
        <Route path="/page-3" component={Tela3} />
        <Route path="/page-3" component={Tela3} />
        <Route path="/page-4-1" component={Tela4_1} />
        <Route path="/page-4-1-1" component={Tela4_1_1} />
        {/* <Route path="/page-4-1-2" component={Tela4_1_2} /> */}
        <Route path="/page-4-1-3" component={Tela4_1_3} />
        {/* <Route path="/page-4-1-4" component={Tela4_1_4} /> */}
        <Route path="/page-4-2" component={Tela4_2} />
        <Route path="/page-4-2-1" component={Tela4_2_1} />
        {/* <Route path="/page-4-2-2" component={Tela4_2_2} /> */}
        <Route path="/page-4-3" component={Tela4_3} />
        <Route path="/page-4-3-1" component={Tela4_3_1} />
        <Route path="/page-4-3-2" component={Tela4_3_2} />
        <Route path="/page-4-4" component={Tela4_4} />
        <Route path="/page-4-5" component={Tela4_5} />
        <Route path="/page-4-6" component={Tela4_6} />
        <Route path="/page-4-7" component={Tela4_7} />
        <Route path="/page-4-8" component={Tela4_8} />
        <Route path="/page-4-9" component={Tela4_9} />
        <Route path="/page-4-10" component={Tela4_10} />
        <Route path="/page-4-11" component={Tela4_11} />
        <Route path="/page-4-12" component={Tela4_12} />
        <Route path="/page-4-13" component={Tela4_13} />
        <Route path="/page-feedback" component={TelaFeedback} />

        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
