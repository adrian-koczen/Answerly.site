import axios from "axios";
import Nav from "../../components/Nav/Nav";
import Head from "next/head";
import AnswerComponent from "../../components/AnswerComponent";
import AnotherQuestions from "../../components/AnotherQuestions";
import classNames from "classnames";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import OtherLanguages from "../../components/OtherLanguages";
//
import { getAnswersString } from "../../tills/tills";

export default function Post({ data, otherLangs }) {
  const [addFixed, setAddFixed] = useState(false);
  const [y, setY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  var relatedQuestionsClass = classNames({
    "related-questions-fixed": addFixed,
  });

  const handleNavigation = useCallback(
    (e) => {
      const scroll = e.currentTarget;
      if (window.innerWidth > 1316) {
        if (y > 100) {
          setAddFixed(true);
        } else if (y < 100) {
          setAddFixed(false);
        }
        setY(scroll.scrollY);
      }
    },
    [y]
  );

  const resizeHandler = () => {
    if (window.innerWidth < 1316) {
      setIsMobile(true);
    }
    if (window.innerWidth > 1316) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    resizeHandler();
  }, []);

  useEffect(() => {
    document.documentElement.lang = data.lang;
  }, [data.lang]);

  return (
    <>
      {data && (
        <>
          {otherLangs && (
            <Head>
              <meta charSet="utf-8" />
              <title>{data.title}</title>
              <meta
                name="description"
                content={
                  data.description ? data.description : "Answerly" + data.title
                }
              />
              <meta name="robots" content="index, follow" />
              <meta name="referrer" content="no-referrer" />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content={`https://answerly.site/` + data.lang + "/" + data.slug}
              />
              <meta property="og:title" content={data.title} />
              <meta property="og:description" content="" />
              <meta property="og:image" content="" />
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content={`https://answerly.site/` + data.slug}
              />
              <meta property="twitter:title" content={data.title} />
              <meta property="twitter:description" content="" />
              <meta property="twitter:image" content="" />
              {/* LINK REL */}
              {otherLangs.map((lang) => {
                return (
                  <link
                    key={lang.lang}
                    href={`https://answerly.site/${lang.lang}/${lang.slug}`}
                    rel={data.lang == lang.lang ? "canonical" : "alternate"}
                    hrefLang={lang.lang}
                  ></link>
                );
              })}
            </Head>
          )}
          <Nav />
          <div className="main-container">
            <div className="question-container">
              <div className="question-title">
                <h1>{data.title}</h1>
              </div>
              <div className="answer-count">
                <div className="flag-image">
                  <Image
                    src={`/images/${data.lang}.png`}
                    alt={`Answerly ${data.lang}`}
                    height={32}
                    width={32}
                  />
                </div>
                <span className="answers-count">
                  {getAnswersString(data.lang)}: {data.answers.length}
                </span>
              </div>
              <div className="answer-box">
                {data.answers &&
                  data.answers.map((answer) => {
                    return <AnswerComponent key={answer._id} answer={answer} />;
                  })}
              </div>
            </div>
            {!isMobile && (
              <AnotherQuestions
                lang={data.lang}
                answersCount={data.answers.length}
                relatedQuestionsClass={relatedQuestionsClass}
              />
            )}
          </div>
          <OtherLanguages otherLangs={otherLangs} />
          <div className="footer">
            <span>Answerly.site 2022</span>
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  try {
    let { data } = await axios.post("https://answerly.site/api/post", {
      slug: context.params.slug,
    });
    let otherLangs = await axios.post(
      "https://answerly.site/api/getOtherLangs",
      {
        pageID: data.pageID,
      }
    );
    otherLangs = otherLangs.data;
    return {
      props: { data, otherLangs },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  try {
    let res = await axios.get("https://answerly.site/api/getPaths");
    const paths = res.data.map((path) => ({
      params: { lang: path.lang, slug: path.slug },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error.message);
  }
}
