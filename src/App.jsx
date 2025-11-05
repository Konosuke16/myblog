import './App.css'
import Header from './components/Header'
import ArticleCard from './components/ArticleCard'
import Profile from './components/Profile'

function App() {
  // サンプル記事データ
  const articles = [
    {
      id: 1,
      title: 'タイトル1',
      description: 'ちょっと内容',
      image: null
    },
    {
      id: 2,
      title: 'タイトル2',
      description: 'ちょっと内容',
      image: null
    },
    {
      id: 3,
      title: 'タイトル3',
      description: 'ちょっと内容',
      image: null
    },
    {
      id: 4,
      title: 'タイトル4',
      description: 'ちょっと内容',
      image: null
    },
    {
      id: 5,
      title: 'タイトル5',
      description: 'ちょっと内容',
      image: null
    },
    {
      id: 6,
      title: 'タイトル6',
      description: 'ちょっと内容',
      image: null
    }
  ]

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="articles-section">
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
        <Profile />
      </main>
    </div>
  )
}

export default App
