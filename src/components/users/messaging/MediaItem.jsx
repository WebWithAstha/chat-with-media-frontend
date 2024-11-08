const MediaItem = ({ media }) => {
    switch (media.type) {
      case 'image':
        return <img src={media.url} alt={media.name || "Image"} className="max-w-[250px] rounded-lg" />;
      case 'video':
        return (
          <video controls className="max-w-[250px] rounded-lg">
            <source src={media.url} type="video/mp4" />
          </video>
        );
      case 'application':
        return (
          <a href={media.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {media.name || "Download Document"}
          </a>
        );
      default:
        return null;
    }
  };
  
  export default MediaItem;
  