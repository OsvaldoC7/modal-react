import Modal from './components/Modal/Modal'
import Modal2 from './components/Modal/Modal2'
import useModal from './hooks/useModal'

function App() {

  const [isOpenModal, openModal, closeModal] = useModal()
  const [isOpenModal2, openModal2, closeModal2] = useModal()

  return (
    <div>
      <button onClick={openModal} className='bg-blue-500 text-white font-semibold hover:bg-blue-700 w-1/6 p-2 m-10 rounded-lg'>
        Abrir
      </button>
      <button onClick={openModal2} className='bg-blue-500 text-white font-semibold hover:bg-blue-700 w-1/6 p-2 m-10 rounded-lg'>
        Abrir modal 2
      </button>
      <Modal 
        isOpen={isOpenModal}
        closeModal={closeModal}
        title='Titulo.'
      >
        <h1>children</h1>
      </Modal>

      <Modal2
        isOpen={isOpenModal2}
        closeModal={closeModal2}
        title='Modal2.'
      />

    </div>
  )
}

export default App
