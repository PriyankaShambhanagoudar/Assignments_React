import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyVerticallyCenteredModal from './Component/Modal/Modal'

function App() {
  const [modalShow, setModalShow] = useState(true);

  return (
    <Fragment>

      <div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>


      {/*  <Card /> */}


    </Fragment>
  )
}

export default App;
