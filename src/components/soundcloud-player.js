import React from "react";

export default function SoundcloudPlayer({
  width = "100%",
  height = "100%",
  url,
  autoPlay = false,
  hideRelated = false,
  showComments = false,
  showUser = true,
  showReposts = false,
  color = "ff5500",
  ...restProps
}) {
  let src = `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`;
  return (
    <iframe
      width={width}
      height={height}
      scrolling="no"
      frameBorder="no"
      src={src}
      {...restProps}
    />
  );
}
