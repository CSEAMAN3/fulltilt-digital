"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function VideoPlayer() {
  return (
    <div className="max-w-240 mx-auto px-8">
      <div className="overflow-hidden rounded-3xl border-2 border-brand-main/90 shadow-2xl">
        <LiteYouTubeEmbed
          id="WBy-LZmK5Ng"
          title="Project Showcase"
          poster="maxresdefault"
        />
      </div>
    </div>
  );
}
