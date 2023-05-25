import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://creativelayers.net/themes/superio/images/resource/blog-single.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Attract Sales And Profits
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mr.Simp</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">
          Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
          Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
          Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur
          this is a text link libero tempus congue. Duis mattis laoreet neque,
          et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum
          pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus
          urna semper eu. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Integer tristique elit lobortis purus
          bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros
          porttitor mattis. Curabitur massa magna, tempor in blandit id, porta
          in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin
          et.
        </p>
      </div>
    </div>
  );
}
