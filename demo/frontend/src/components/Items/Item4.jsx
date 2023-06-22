import { useState } from "react";
import "../../App.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";
import BasicModal from "../../ModalWrapper/BasicModal";

export default function Item2() {
  const [openMyModal, setOpenMyModal] = useState(false);

  const handleOpen = () => {
    setOpenMyModal(true);
  };

  const emptyFunction = () => {
    // set here the function you want to execute on clicking on the "yes" button or
    // let empty if you just want to close the modal
  };

  const myFunction = () => {
    console.info("this is modal wrapper");
    // set here the function you want to execute on clicking on the "yes" button or
    // let empty if you just want to close the modal
  };

  return (
    <div className="item-class">
      <div className="this-page fourth-item-page">
        <h1>Item 4</h1>
        <button type="button" className="btn-open-modal" onClick={handleOpen}>
          Open modal
        </button>
        {openMyModal && (
          <ModalWrapper closeModal={setOpenMyModal} isCloseBtn>
            <BasicModal
              closeModal={setOpenMyModal}
              actionNoButton={emptyFunction}
              actionYesButton={myFunction}
              modalText="Are you sure ?"
            />
          </ModalWrapper>
        )}
      </div>
    </div>
  );
}
