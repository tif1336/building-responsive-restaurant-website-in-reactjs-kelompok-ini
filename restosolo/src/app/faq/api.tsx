// api.tsx
import * as React from "react";
import FAQ from "./page";

interface FAQApiProps {
  id: number;
  question: string;
  answer: string;
}

export default function FAQContainer() {
  const [faq, setFaq] = React.useState<FAQApiProps[]>([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faq/")
      .then((response) => response.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <div>
      {faq.map((faqItem) => (
        <FAQ key={faqItem.id} {...faqItem} />
      ))}
    </div>
  );
}
