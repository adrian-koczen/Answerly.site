import { AiOutlinePicCenter, AiOutlineFacebook } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { SiYoutube } from 'react-icons/si'
import Head from 'next/head'
import Link from 'next/link'

export default function EntryPage({ questions }) {
  return (
    <div className='entry-page-container'>
      <Head>
        <meta charSet='utf-8' />
        <title>FrageAntworten.com</title>
        <meta
          name='description'
          content='
          Hast du eine Frage? Hier finden Sie die Antwort. Hier beantworten die Leute deine Frage.'
        />
      </Head>
      <h2>Kürzlich hinzugefügte Fragen</h2>
      <div className='entry-page-categories'>
        <div className='entry-page-categories2'>
          {questions &&
            questions.map((question) => {
              return (
                <div key={question._id} className='entry-page-category'>
                  <div className='category-icon'>
                    <AiOutlinePicCenter />
                  </div>
                  <Link href={question.slug}>
                    <a>{question.title}</a>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
      <div className='entry-page-discover-row'>
        <div className='entry-page-discover'>
          <div className='discover-right'>
            <ul>
              <li>
                <FiInstagram />
              </li>
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <SiYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
