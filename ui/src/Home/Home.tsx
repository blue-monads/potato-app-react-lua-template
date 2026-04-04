import { Link } from 'react-router'
import authors from '../Author/authors'

interface AuthorData {
  name: string
  quotes: string[]
}

function Home() {
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-2xl font-bold mb-6">Authors</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Author</th>

            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((authorEntry) => {
            const [slug, data] = Object.entries(authorEntry)[0] as [string, AuthorData]
            return (
              <tr key={slug} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/${slug}`} className="text-blue-600 hover:underline">
                    {data.name}
                  </Link>
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/${slug}`} className="text-blue-600 hover:underline">
                    View Quotes
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
