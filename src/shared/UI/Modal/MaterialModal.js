import React from "react";
// import { makeStyles } from "@mui/styles";
// import Modal from '@mui/material/Modal'
import Modal from "react-modal";
// import './Modal.css';

const CustomModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} contentLabel="My dialog">
        <header className={`modal__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>

        <div>
          <form
            onSubmit={
              props.onSubmit
                ? props.onSubmit
                : (event) => event.preventDefault()
            }
          >
            <div className={`modal__content ${props.contentClass}`}>
              {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
              {props.footer}
            </footer>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
