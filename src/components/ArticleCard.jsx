function ArticleCard({ title, description, image }) {
  return (
    <article className="article-card">
      <div className="article-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">画像</div>
        )}
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
    </article>
  )
}

export default ArticleCard
