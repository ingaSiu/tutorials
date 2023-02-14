import { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ModalBtn onClick={() => setOpenModal(true)}>Modal</ModalBtn>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default App;

const ModalBtn = styled.button`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  padding: 12px 24px;
`;

