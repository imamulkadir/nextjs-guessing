"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import Loading from "./prediction/[name]/loading";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="p-0 mb-10 text-center bg-transparent rounded-md">
          <h1 className="text-2xl font-semibold mb-0 text-gray-500">
            Enter First or Last name to predict!!!
          </h1>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            placeholder="Hasina"
            className="block text-center py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={inputVal}
            required
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Predict
        </button>
      </form>
    </div>
  );
}
