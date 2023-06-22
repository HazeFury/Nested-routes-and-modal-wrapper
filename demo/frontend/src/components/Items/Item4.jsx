import { useState } from "react";
import "../../App.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";

export default function Item4() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = () => {
    setOpenModal(!openModal);
  };

  const myAction = () => {
    console.info("toto");
  };
  return (
    <div className="item-class">
      <div className="this-page fourth-item-page">
        <h1>Item 4</h1>
        <button type="button" className="btn-open-modal" onClick={handleToggle}>
          Open modal
        </button>
        {openModal && (
          <ModalWrapper setToggleModal={setOpenModal}>
            <BasicModal setToggleModal={setOpenModal} btnAction={myAction} />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
}
