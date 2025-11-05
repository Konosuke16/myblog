function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="site-title-link">
          <h1 className="site-title">k-suzumi</h1>
        </a>
        <nav className="nav">
          <a href="/" className="nav-link">ホーム</a>
          <a href="#tech" className="nav-link">技術</a>
          <a href="#hobby" className="nav-link">趣味</a>
          <a href="#other" className="nav-link">その他</a>
          <a href="#about" className="nav-link">このサイトについて</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
