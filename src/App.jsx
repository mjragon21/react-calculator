import React, { useState } from 'react'
import './App.css'

function App() {

  const [displayValue, setDisplayValue] = useState("0");

  const appendToDisplay = (input) => {
    setDisplayValue((prevValue) => prevValue + input);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };


  return (
    <>
      <div class="min-h-screen  flex items-center justify-center">
        <div class="bg-custom-dark-bg shadow-lg rounded-lg p-8 w-80">
          <div class="mb-4">
            <input
              type="text"
              readOnly

              className="w-full bg-gray-200 text-right text-xl px-2 py-3 rounded-lg focus:outline-none"
              value={displayValue}
              class="w-full bg-gray-100 text-right text-xl px-2 py-3 rounded-lg focus:outline-none"
            />


          </div>
          <div class="grid grid-cols-4 gap-4">
            <button class="bg-gray-200  hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("7")}
            >7</button>

            <button class="bg-gray-200 hover:bg-gray-400 text-xl  font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("8")}
            >8</button>

            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("9")}
            >9</button>
            <button class="bg-yellow-500 hover:bg-gray-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("/")}
            >/</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("4")}
            >4</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("5")}
            >5</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("6")}
            >6</button>
            <button class="bg-yellow-500 hover:bg-gray-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("*")}
            >*</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("1")}
            >1</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("2")}
            >2</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("3")}
            >3</button>
            <button class="bg-yellow-500 hover:bg-gray-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("-")}
            >-</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("0")}
            >0</button>
            <button class="bg-gray-200 hover:bg-gray-400 text-xl font-bold px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay(".")}
            >.</button>


            <button class="bg-yellow-500 hover:bg-green-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => calculate()}>

              =
            </button>
            <button class="bg-yellow-500 hover:bg-gray-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => appendToDisplay("+")}>

              +</button>




            <button class="bg-yellow-500 hover:bg-red-400 text-xl font-bold text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => clearDisplay()}
            >c</button>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
