import Button from './button'
interface ModalType {
  children?: string | JSX.Element | JSX.Element[],
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {

  return <> { props.isOpen && 
    <div aria-hidden={!props.isOpen}
      onClick={props.toggle}
      className="fixed inset-0 bg-opacity-50 z-20 bg-ground w-screen h-screen flex items-center justify-center">
      <div  
        onClick={(e)=>e.stopPropagation()} //don't close if clicking on modal body
        role="dialog"
        aria-modal="true"
        className="relative p-5 bg-white min-w-[500px] min-h-[400px] rounded shadow">
        
        {props.children}
        
        <Button 
          color="wood" 
          displayText={'close'} 
          onClick={props.toggle}
          className="absolute bottom-6 right-6"/>
      </div>
    </div> }
  </>
}