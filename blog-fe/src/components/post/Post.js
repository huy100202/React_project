import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postItem">
        <img
          src="https://creativelayers.net/themes/superio/images/resource/news-2.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Attract Sales And Profits</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl
          massa, at interdum mauris sollicitudin et.
        </p>
      </div>
    </div>
  );
}
