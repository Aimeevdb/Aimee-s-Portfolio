import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xjgzaadw";

export default function useSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);
    setResponse(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.firstName,
          email: data.email,
          type: data.type,
          message: data.comment,
        }),
      });

      if (res.ok) {
        setResponse({
          type: "success",
          message: "Thanks for reaching out! I'll get back to you soon. 🙂",
        });
      } else {
        setResponse({
          type: "error",
          message: "Something went wrong. Please try again or email me directly at aimeevdb@gmail.com.",
        });
      }
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong. Please try again or email me directly at aimeevdb@gmail.com.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
}