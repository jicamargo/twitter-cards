import { useState } from "react"

export function TwitterFollowCard ({userName , name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Following" : "Follow"
  const buttonClassName = isFollowing ? "tw-followCard-btn is-following" : "tw-followCard-btn"
  
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`${userName}'s avatar`} 
          src={`https://unavatar.io/${userName}`} />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}