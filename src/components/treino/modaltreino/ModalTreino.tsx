import Popup from "reactjs-popup";
import FormTreino from "../formtreino/FormTreino";
import "reactjs-popup/dist/index.css";
import "./ModalTreino.css";

function ModalTreino() {
  return (
    <>
      <Popup
        trigger={
          <button className="transition delay-150 duration-300 ease-in-out ...">
            Novo Treino
          </button>
        }
        modal
      >
        <FormTreino />
      </Popup>
    </>
  );
}

export default ModalTreino;
