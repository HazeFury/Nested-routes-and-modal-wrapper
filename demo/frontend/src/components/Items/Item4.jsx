import { useState } from "react";
import "../../App.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";

export default function Item4() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = () => {
    setOpenModal(true);
  };

  const [id, setId] = useState(0);

  const myAction = () => {
    setId(id + 1);
    console.info(id);
  };
  return (
    <div className="item-class">
      <div className="this-page fourth-item-page">
        <h1>Item 4</h1>
        <button type="button" className="btn-open-modal" onClick={handleToggle}>
          Open modal
        </button>
        {openModal && (
          <ModalWrapper closeModal={setOpenModal}>
            <BasicModal closeModal={setOpenModal} actionButton={myAction} />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
}
