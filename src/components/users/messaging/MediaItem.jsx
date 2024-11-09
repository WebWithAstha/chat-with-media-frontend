import React from 'react';

const MediaItem = ({ media }) => {
  if (media.isDeleted) {
    return (
      <div className="flex items-center justify-center max-w-[250px] rounded-lg bg-zinc-200 p-4 text-zinc-500">
        {media.type === 'image' && <div>🖼️ Image Deleted</div>}
        {media.type === 'video' && <div>🎥 Video Deleted</div>}
        {media.type === 'audio' && <div>🔊 Audio Deleted</div>}
        {media.type === 'application' && <div>📄 Document Deleted</div>}
        {!['image', 'video', 'audio', 'application'].includes(media.type) && <div>File Deleted</div>}
      </div>
    );
  }

  switch (media.type) {
    case 'image':
      return (
        <div className="max-w-[250px]">
          <img
            src={media.url}
            alt={media.name || 'Image'}
            className="rounded-lg cursor-pointer"
            onClick={() => window.open(media.url, '_blank')}
          />
          {media.caption && <p className="text-sm mt-1">{media.caption}</p>}
        </div>
      );

    case 'video':
      return (
        <div className="max-w-[250px]">
          <video
            controls
            className="rounded-lg cursor-pointer"
            onClick={() => window.open(media.url, '_blank')}
          >
            <source src={media.url} type="video/mp4" />
          </video>
          {media.caption && <p className="text-sm mt-1">{media.caption}</p>}
        </div>
      );

    case 'audio':
      return (
        <div className="max-w-[250px] min-w-40">
          <audio controls className="w-full rounded-lg">
            <source src={media.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {media.caption && <p className="text-sm mt-1">{media.caption}</p>}
        </div>
      );

    case 'application':
    default:
      return (
        <div className="flex items-center gap-2 p-2 bg-zinc-100 rounded-lg max-w-[250px] cursor-pointer" onClick={() => window.open(media.url, '_blank')}>
          <div className="text-xl">📄</div>
          <div className="flex flex-col">
            <span className="text-blue-500 break-all">{media.name || 'Download Document'}</span>
            {media.caption && <p className="text-sm mt-1">{media.caption}</p>}
          </div>
        </div>
      );
  }
};

export default MediaItem;
