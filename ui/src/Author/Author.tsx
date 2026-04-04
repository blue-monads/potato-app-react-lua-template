import { useParams, Link } from 'react-router'
import authors from './authors'
import { BASE_PATH } from '../lib/base'

interface AuthorData {
  name: string
  quotes: string[]
}

function Author() {
  const { author: authorSlug } = useParams<{ author: string }>()

  const authorEntry = authors.find((a) => Object.keys(a)[0] === authorSlug)
  const authorData = authorEntry ? Object.values(authorEntry)[0] as AuthorData : null

  if (!authorData) {
    return (
      <div className="min-h-screen w-full p-8">
        <h1 className="text-2xl font-bold mb-6">Author not found</h1>
        <Link to={BASE_PATH} className="text-blue-600 hover:underline">Back to Authors</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full p-8">
      <Link to={BASE_PATH} className="text-blue-600 hover:underline mb-6 inline-block">← Back to Authors</Link>
      <h1 className="text-2xl font-bold mb-6">{authorData.name}</h1>
      <div className="space-y-4">
        {authorData.quotes.map((quote, index) => (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 italic"
          >
            "{quote}"
          </blockquote>
        ))}
      </div>
    </div>
  )
}

export default Author
