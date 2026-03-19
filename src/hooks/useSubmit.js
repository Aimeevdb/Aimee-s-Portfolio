import { useState } from "react";

export default function useSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setResponse({
        type: "success",
        message: "Thanks for your submission!",
      });
    }, 1000);
  };

  return { isLoading, response, submit };
}