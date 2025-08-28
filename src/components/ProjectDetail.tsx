import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-lg p-8 w-11/12 max-w-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 bg-none"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectDetail;
