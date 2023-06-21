import PropTypes from "prop-types";
import styles from "./BasicModal.module.css";

export default function BasicModal({setToggleModal, btnAction}) {
    const handleModalClose = () => {
        setToggleModal(false);
      };
    const handleAction = () => {
        btnAction()
        setToggleModal(false);
      };
    

  return (
    <div className={styles.basic_modal_container}>
      <p className={styles.modal_text}>Are you sure ?</p>
      <div className={styles.btn_modal_box}>
        <button
          type="button"
          className={`${styles.btn_inside_modal} ${styles.btn_for_no}`}
          onClick={handleModalClose}
        >
          No
        </button>
        <button
          type="button"
          className={`${styles.btn_inside_modal} ${styles.btn_for_yes}`}
          onClick={handleAction}

        >
          Yes
        </button>
      </div>
    </div>
  );
}

BasicModal.propTypes = {
    setToggleModal: PropTypes.func.isRequired, 
    btnAction: PropTypes.func.isRequired, 
  };