import { useState } from 'react';
import Button from './button'

type ModalProps = {
  visible: boolean,
  children: string | JSX.Element | JSX.Element[] 
}
const defaultProps = {
  visible: true,
  children: 'the modal is visible'
};

Modal.defaultProps = defaultProps;

export default function Modal(props: ModalProps) {

  const [visible, setVisible] = useState(props.visible)
  
  const closeModal = () => {
    setVisible(false)
  }
 
  return <>{ visible && 
    <div aria-hidden={!visible}
      onClick={closeModal}
      className="fixed inset-0 bg-opacity-50 z-20 bg-cloudy w-screen h-screen flex items-center justify-center">
      <div  
        onClick={(e)=>e.stopPropagation()} //don't close if clicking on modal body
        role="dialog"
        aria-modal="true"
        className="relative p-5 bg-white min-w-[500px] min-h-[400px] rounded shadow">
        
        {props.children}
        
        <Button 
          color="berry" 
          displayText={'close'} 
          onClick={closeModal}
          className="absolute bottom-2 right-2"/>
      </div>
    </div> }
  </>
}