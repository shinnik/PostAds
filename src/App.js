import React from 'react';
import Advert from "./containers/Advert/Advert";
import {Layout} from "./components/Layout/Layout";
import AdList from "./containers/AdList/AdList";

function App() {
  return (
    <div className="App">
        <Layout>
            <Advert/>
            <AdList/>
        </Layout>
    </div>
  );
}

export default App;
