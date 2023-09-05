import Button from "./button";
interface ModalType {
  children?: string | JSX.Element | JSX.Element[];
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {" "}
      {props.isOpen && (
        <div
          aria-hidden={!props.isOpen}
          onClick={props.toggle}
          className="fixed inset-0 z-20 flex h-screen w-screen items-center justify-center bg-lavender bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} //don't close if clicking on modal body
            role="dialog"
            aria-modal="true"
            className="relative min-h-[400px] min-w-[500px] rounded bg-white p-5 shadow"
          >
            {props.children}

            <Button
              color="yin"
              displayText={"close"}
              onClick={props.toggle}
              className="absolute bottom-6 right-6"
            />
          </div>
        </div>
      )}
    </>
  );
}
