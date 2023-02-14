import styled from 'styled-components';
import cat from '../assets/images/cat.jpg';
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <img src={cat} alt="" />

        <ModalRight>
          <CloseBtn onClick={onClose}>X</CloseBtn>
          <Content>
            <p>Do you want a</p>
            <h1>20$ credit</h1>
            <p>for your first adventure?</p>
          </Content>

          <ButtonContainer>
            <Button>
              <span>YES</span>, I love adventure
            </Button>
            <Button bg="#a76a99">
              <span>NO</span>, thanks
            </Button>
          </ButtonContainer>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  img {
    width: 100%;
    object-fit: fill;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    height: 100vh;
  }
`;
const ModalRight = styled.div`
  width: 100%;
`;

const CloseBtn = styled.p`
  position: fixed;
  top: 8px;
  right: 8px;
  @media screen and (max-width: 500px) {
    color: #ffffff;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;
const Button = styled.button`
  width: 100%;
  margin: 0.5rem;
  padding: 16px 0;
  border: none;
  color: #ffffff;
  background-color: ${({ bg }) => bg || '#411b57'};

  span {
    font-weight: bold;
  }
`;
