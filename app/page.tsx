"use client";

import { useState } from "react";

import Divider from "./components/divider";
import Textinput from "./components/textinput";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Tooltip from "./components/tooltip";
import Card from "./components/card";
import Spinner from "./components/spinner";
import Modal from "./components/modal";
import useModal from "./hooks/useModal";

export default function AllTheThings() {
  const { isOpen, toggle } = useModal();
  const [textInputValue, setTextInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const updateTextValue = (value: string) => {
    setTextInputValue(value);
  };
  const updateCheckValue = (value: boolean) => {
    setCheckboxValue(value);
  };

  return (
    <div>
      <div className="mt-5">
        <div className="mb-4 font-thin text-yin">
          button component with color prop
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-4">
          {["yin", "violet", "rose", "coral", "vinegar"].map((item, index) => {
            return <Button key={index} color={item} className="" />;
          })}
        </div>

        <Divider />
        <div className="mb-4 font-thin text-yin">spinner/loading component</div>
        <Spinner />

        <Divider />
        <div className="mb-4 font-thin text-yin">tooltip</div>
        <Tooltip
          displayText="hover to reveal!"
          tooltipText="tooltip example revealed!"
        />

        <Divider />
        <div className="mb-4 font-thin text-yin">
          card component with child slot
        </div>
        <Card>
          <div>some content in the card</div>
        </Card>

        <Divider />
        <div className="mb-4 font-thin text-yin">modal component</div>
        <Button
          color="rose"
          displayText="show modal"
          className="mt-2"
          onClick={toggle}
        />
        <Modal isOpen={isOpen} toggle={toggle}>
          sample modal!
        </Modal>

        <Divider />
        <div className="mb-4 font-thin text-yin">text input component</div>
        <Textinput id="input1" label="Name" onValueChange={updateTextValue} />
        <div className="mt-2 h-6 text-sm text-slate-400">
          value: {textInputValue}
        </div>

        <Divider />
        <div className="mb-4 font-thin text-yin">checkbox component</div>
        <Checkbox id="cb1" label="thing" onValueChange={updateCheckValue} />
        <div className="mt-2 h-6 text-sm text-slate-400">
          value: {checkboxValue.toString()}
        </div>

        <Divider />
      </div>
    </div>
  );
}
