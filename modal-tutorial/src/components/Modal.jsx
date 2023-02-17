import styled from 'styled-components';

const Modal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseBtnContainer>
          <CloseBtn onClick={() => closeModal(false)}>X</CloseBtn>
        </CloseBtnContainer>

        <Title>
          <h1>Do you want to continue?</h1>
        </Title>
        <Body>
          <p>The next page is awesome</p>
        </Body>
        <Footer>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;
const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;
const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
