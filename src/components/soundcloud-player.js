import React from "react";

export default function SoundcloudPlayer({
  width = "100%",
  height = "450px",
  url,
  autoPlay = false,
  hideRelated = false,
  showComments = false,
  showUser = true,
  showReposts = false,
  visual = true,
  color = "ff5500",
  ...restProps
}) {
  let src = visual
    ? `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`
    : `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`;
  return (
    <iframe
      width={width}
      height={visual ? height : "auto"}
      scrolling="no"
      frameborder="no"
      src={src}
      {...restProps}
    />
  );
}
