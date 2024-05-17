import { TextField, Modal } from "glide-design-system";
import React from "react";
import PathwayForm from "./PathwayForm";
import { useDispatch, useSelector } from "react-redux";
import { propelAdminSliceActions } from "../PropelAdminSlice";
import ModalHeader from "../../../components/ModalHeader";
import classes from './CraetePathway.Module.css'

const CreatePathway = () => {
  const modalOpen = useSelector((state) => {
    return state?.pathwaySlice.createPathwayModal;
  });

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(
      propelAdminSliceActions.handleCreatePathwayModal({
        modal: false,
      })
    );
  };
  return (
    <div>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <ModalHeader />
        <div className={classes.formHeader}>
          <form>
            <PathwayForm />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePathway;
