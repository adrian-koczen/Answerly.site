import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

// @refresh reset

const AnotherQuestions = ({
  lang,
  questions,
  answersCount,
  relatedQuestionsClass,
}) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    axios
      .post("https://answerly.site/api/getLastPosts", { lang: lang })
      .then((res) => {
        setFormData(res.data);
      });
  }, [lang]);

  // @refresh reset
  return (
    <>
      {formData && (
        <div className="related-questions-container">
          <div className={relatedQuestionsClass}>
            <h2></h2>
            <div className="related-questions-box">
              {formData.map((el) => {
                return (
                  <Link
                    key={el.slug}
                    href={`https://answerly.site/${lang}/${el.slug}`}
                  >
                    {el.title.slice(0, 70)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnotherQuestions;
