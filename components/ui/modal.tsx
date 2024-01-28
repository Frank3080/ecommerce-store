"use client";

interface ModalProps {
  title: String;
  description: String;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; //? means its optional
}

//FC defines the component as a function component, that takes ModalProps as its props
export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {};
