import React from "react";
import Image from "next/image";
import Link from "next/link";

const OtherLanguages = ({ otherLangs }) => {
  const shorts = [
    { lang: "pl", fullLang: "Polska" },
    { lang: "fr", fullLang: "France" },
    { lang: "de", fullLang: "Deutschland" },
    { lang: "es", fullLang: "España" },
    { lang: "it", fullLang: "Italia" },
  ];
  return (
    <div className="other-languages-wrapper">
      {otherLangs.map((language) => {
        return (
          <Link
            key={language.lang}
            href={`https://answerly.site/${language.lang}/${language.slug}`}
          >
            <a>
              <div className="other-language">
                <Image
                  src={`/images/${language.lang}.png`}
                  alt={`Answerly ${
                    shorts.filter((el) => el.lang == language.lang)[0].fullLang
                  }`}
                  height={32}
                  width={32}
                />
                <span className="other-language-lang">
                  {shorts.filter((el) => el.lang == language.lang)[0].fullLang}
                </span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default OtherLanguages;
