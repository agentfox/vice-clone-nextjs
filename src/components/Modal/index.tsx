import React from "react";

interface IModalProps {
  children: React.ReactNode;
}

function Modal(props: IModalProps) {
  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
      >
        {props.children}
      </div>
    </>
  );
}

export default Modal;
