import { useState, useEffect } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ value = "#aabbcc", onPickerChange }: Props) => {
  const [color, setColor] = useState(value);

  useEffect(() => {
    setColor(value);
  }, [value]);

  useEffect(() => {
    onPickerChange(color);
  }, [color, onPickerChange]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center book-form_input mb-5">
        <p>#</p>
        <HexColorInput
          color={color}
          onChange={setColor}
          className="hex-input"
        />
      </div>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;
