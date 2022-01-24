import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
  <div className="featured">
    {type && (
      <div className="category">
        <span>{type === "movie" ? "Movies" : "Series" }</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
      </div>
    )}
      <img src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg" alt="" />
      <div className="info">
        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/serenitynowtitle_mas_mob.jpg" alt="" />
        <span className="desc"></span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
  </div>
  );
}
