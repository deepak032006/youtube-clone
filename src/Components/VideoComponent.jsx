import './Styles/Video.css';
const VideoComponent = ({image,proImg,title,chlName,views,date,URL})=>{
  return(
    // <>
    <div className="wrapper">
      <a href={URL}>
      <img className="thumbnail" src={image} alt={title} /></a>
      <div className='container'>
      <div className="profile-div">
        <img className="profile-img" src={proImg} />
      </div>
      <div className='description'>
        <h2 className="title">{title}</h2>
        <p className="chl-name">{chlName}</p>
        <div>
        <span className="views">{views}</span>
        <span className="date">{date}</span>
        </div>
      </div>
      </div>
    </div>
    // </>
  )
}

export default VideoComponent;