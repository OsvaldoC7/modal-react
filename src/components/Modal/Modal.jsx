import React from 'react'
import './Modal.css'

export default function Modal({ isOpen, closeModal, children, title }) {

  const handleModalDialogClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div 
      className={`modal bg-black bg-opacity-70 w-screen h-screen fixed top-0 left-0 z-50 justify-center items-center ${isOpen && 'modal-open'}`}
      onClick={closeModal}
    >
      <div className='bg-white p-10 w-[600px] h-[600px] border-t-4 border-blue-500 rounded-xl' onClick={handleModalDialogClick}>
        <h1 className='text-center text-xl font-medium'>{title}</h1>
        {children}
        <button onClick={closeModal} className='border-2 border-blue-500 text-blue-500 font-semibold hover:bg-gray-100 w-1/6 p-2 m-10 rounded-lg'>
          Cerrar
        </button>
      </div>
    </div>
  )
}
