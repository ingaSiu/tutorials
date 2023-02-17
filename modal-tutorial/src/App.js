import './App.css';
import Modal from './components/Modal';
import { useState } from 'react';
const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>Click the button to open modal</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default App;

