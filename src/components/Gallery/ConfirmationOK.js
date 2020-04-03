import React from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "react-bootstrap";
import { confirmable, createConfirmation } from "react-confirm";

class ConfirmationOK extends React.Component {
  render() {
    const {
      proceedLabel,
      title,
      confirmation,
      show,
      proceed,
      enableEscape = true,
    } = this.props;
    return (
      <div className="static-modal">
        <Modal
          show={show}
          onHide={() => proceed(false)}
          backdrop={enableEscape ? true : "static"}
          keyboard={enableEscape}
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{confirmation}</Modal.Body>
          <Modal.Footer>
            <Button
              className="button-l"
              bsStyle="primary"
              onClick={() => proceed(true)}
            >
              {proceedLabel}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ConfirmationOK.propTypes = {
  okLabbel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool,
};

export function confirmOK(confirmation, proceedLabel = "OK", options = {}) {
  return createConfirmation(confirmable(ConfirmationOK))({
    confirmation,
    proceedLabel,
    ...options,
  });
}
