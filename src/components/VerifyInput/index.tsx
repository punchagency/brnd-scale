import React, { useState, useRef } from "react";

interface VerifyInputProps {
    length: number;
    loading: boolean;
    label?: string;
    onComplete: (code: string) => void;
}

const InputCode = ({ length, label, loading, onComplete }:VerifyInputProps) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const processInput = (e:React.ChangeEvent<HTMLInputElement>, slot:number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1 ) {
     inputs.current[slot + 1]?.focus();
    }
    if (newCode.every(num => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot:number) => {
    console.log("key ", e.key)
    if ((e.key === 'Backspace' || e.key === 'Delete') && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1]?.focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-inputs">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={e => processInput(e, idx)}
              onKeyUp={e => onKeyUp(e, idx)}
              ref={ref => inputs.current.push(ref)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputCode;
