function Avatar({url}) {
  return (<img loading="lazy"
  className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-105"
  src={url} alt="Profile Pic" />)
}

export default Avatar