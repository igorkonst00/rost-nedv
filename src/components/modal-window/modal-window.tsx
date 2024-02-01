import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { CrossIcon } from "./icons/cross-icon";

export function ModalWindow({
  isOpen = false,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const inModal = (e.target as HTMLElement).closest("[data-id=modal]");
    if (inModal) return;
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div
      onClick={handleClick}
      className="fixed inset-0 backdrop-blur overflow-y-auto flex z-[2]"
    >
      <button
        onClick={() => onClose()}
        className="w-8 h-8 flex items-center justify-center absolute top-4 right-4"
      >
        <CrossIcon />
      </button>
      <div
        data-id="modal"
        className="bg-primary m-auto relative flex flex-col justify-start max-w-[767px] min-h-[536px] w-full pt-[62px] py-12 px-6 black-shadow"
      >
        {children}
      </div>
    </div>
  );

  const modalRoot = document.getElementById("modals");
  if (modalRoot) {
    return createPortal(modal, modalRoot);
  } else {
    return null;
  }
}
