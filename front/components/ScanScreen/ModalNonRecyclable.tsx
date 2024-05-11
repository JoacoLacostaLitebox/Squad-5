import React from 'react';

interface ModalNonRecyclableProps {
  onClose: () => void;
}

const ModalNonRecyclable = ({ onClose }: ModalNonRecyclableProps) => {
  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-10 flex items-center flex-col gap-y-5">
        <h2 className="text-lg font-bold mb-4">Item no reciclable 🥲</h2>
        <p className="text-gray-700">El item que escaneaste no es reciclable</p>
        <button className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md" onClick={onClose}>
          Seguir escaneando
        </button>
      </div>
    </div>
  )
}

export default ModalNonRecyclable;
