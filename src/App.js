import { useState } from "react";
import { Alert, AlertIcon, Input, Button } from "@chakra-ui/react";
import './App.css';

function VowelsCounter() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    setCounter(count);
  }

  return (
      <div className="container">
      <Input
        placeholder="Ingrese un texto"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button onClick={() => countVowels(inputText)}>Contar vocales</Button>
      {counter !== null ? (
        <Alert status="success" w="300px">
          <AlertIcon />
          El número de vocales es: {counter}
        </Alert>
      ) : (
        inputText !== "" && (
          <Alert status="error">
            <AlertIcon />
            Debe ingresar un texto para contar las vocales.
          </Alert>
        )
      )}
      </div>
  );
}

function App() {
  return (
    <div>
      <VowelsCounter />
    </div>
  );
}

export default App;
