import {
  HTMLClip,
  loadPlugin,
  CSSEffect,
  AudioPlayback,
} from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
import MapsDef from "@donkeyclip/motorcortex-ol";

import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  width,
  top,
  left,
  transform,
  fadeIn,
  widthHeight,
  height,
  filterInvert,
  fillStroke,
  color,
} from "./incidents";
import { initParams } from "./initParams";

const SVGD = loadPlugin(SVGDDef);
const Maps = loadPlugin(MapsDef);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap`,
    },
  ],
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  audioSources: [
    {
      src: "@initParams.articles[0].article_audio",
      id: "article-1",
      base64: true,
    },
    {
      src: "@initParams.articles[1].article_audio",
      id: "article-2",
      base64: true,
    },
    {
      src: "@initParams.articles[2].article_audio",
      id: "article-3",
      base64: true,
    },
  ],
});

const songPlayback = new AudioPlayback({
  selector: "~#article-1",
  startFrom: 0,
  duration:
    "@expression(initParams.articles[0].article_audio_duration*1000+500)",
});

const songPlayback2 = new AudioPlayback({
  selector: "~#article-2",
  startFrom: 0,
  duration:
    "@expression(initParams.articles[1].article_audio_duration*1000+500)",
});

const songPlayback3 = new AudioPlayback({
  selector: "~#article-3",
  startFrom: 0,
  duration:
    "@expression(initParams.articles[2].article_audio_duration*1000+500)",
});

const drawTree = new SVGD.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
    initialValues: {
      cover: 0,
    },
  },
  {
    selector: ".mc-logo-path",
    duration: 1000,
  }
);

const fillLogo = new CSSEffect(
  {
    animatedAttrs: {
      fill: "#21084f",
    },
  },
  {
    selector: ".mc-logo-path",
    duration: 1,
  }
);

const base = MapsDef.utils.fromLonLat([22.962279589437337, 40.586910407551436]);
const bern = MapsDef.utils.fromLonLat([7.4458, 46.95]);

const mapClip = new Maps.Clip(
  {
    parameters: {
      view: { center: base, zoom: 18 },
    },
  },
  {
    selector: ".map-wrapper",
    containerParams: { width: "800px", height: "800px" },
    initParams: { location: "@initParams.location" },
  }
);

const gotoBern = new Maps.GoTo(
  {
    animatedAttrs: {
      goto: {
        zoom: 4,
        center: bern,
      },
    },
  },
  { duration: 1500, selector: "!#olmap", easing: "easeOutCirc" }
);

mapClip.addIncident(gotoBern, 3900);

const gotoFinish = new Maps.GoTo(
  {
    animatedAttrs: {
      goto: {
        zoom: 10,
        center: "@initParams.location",
      },
    },
  },
  { duration: 1000, selector: "!#olmap", easing: "easeOutCirc" }
);

mapClip.addIncident(gotoFinish, 5400);

clip.addIncident(drawTree, 0);
clip.addIncident(fillLogo, 1000);
clip.addIncident(width("100%", ".text-wraper", 1000, "easeInOutQuint"), 1001);
clip.addIncident(top("0%", ".name", 600, "easeInOutQuint"), 1500);
clip.addIncident(
  top("0%", ".description-wraper > .description", 600, "easeInOutQuint"),
  1700
);
clip.addIncident(top("850px", ".logo-wrapper", 600, "easeOutCirc"), 3300);
clip.addIncident(left("-620px", ".logo-wrapper", 600, "easeOutCirc"), 3300);
clip.addIncident(transform(0.2, ".logo-wrapper", 600, "easeOutCirc"), 3300);
clip.addIncident(fadeIn(".map-slide", 600, "easeOutCirc"), 3300);
clip.addIncident(top("0%", ".map-slide", 600, "easeOutCirc"), 3300);
clip.addIncident(
  widthHeight("800px", ".map-wrapper", 600, "easeOutCirc"),
  3300
);
clip.addIncident(
  top(
    "0px",
    ".message-description,.message-heading",
    600,
    "easeOutCirc",
    "@stagger(0, 400)"
  ),
  3700
);
clip.addIncident(
  top(
    "100%",
    ".message-description,.message-heading",
    600,
    "easeOutCirc",
    "@stagger(0, 400)"
  ),
  9000
);
clip.addIncident(left("25%", ".map-wrapper", 800, "easeOutCirc"), 9300);
clip.addIncident(top("20%", ".map-wrapper", 800, "easeOutCirc"), 9300);
clip.addIncident(transform(3, ".map-wrapper", 800, "easeOutCirc"), 9300);
clip.addIncident(filterInvert(".map-wrapper", 800), 9300);
clip.addIncident(fillStroke("#fff", ".mc-logo-path", 800), 9300);
clip.addIncident(color("#fff", ".name,.description", 800), 9300);
clip.addIncident(height("720px", ".news-wrapper", 800, "easeInOutQuint"), 9300);
clip.addIncident(
  width("1280px", ".news-wrapper", 800, "easeInOutQuint"),
  10100
);

const getClassNameText = (child) =>
  `.news-wrapper .article:nth-child(${child}) .article-text-wrapper`;
const getClassNameImage = (child) =>
  `.news-wrapper .article:nth-child(${child}) .article-image`;

clip.addIncident(top("0%", getClassNameText(1), 600, "easeOutCirc"), 10500);
clip.addIncident(top("0%", getClassNameImage(1), 600, "easeOutCirc"), 10500);
clip.addIncident(songPlayback, 10500);
clip.addIncident(
  top("100%", getClassNameText(1), 600, "easeOutCirc"),
  clip.duration
);
clip.addIncident(
  top("-100%", getClassNameImage(1), 600, "easeOutCirc"),
  clip.duration - 600
);

clip.addIncident(
  top("0%", getClassNameText(2), 600, "easeOutCirc"),
  clip.duration
);
clip.addIncident(
  top("0%", getClassNameImage(2), 600, "easeOutCirc"),
  clip.duration - 600
);
clip.addIncident(songPlayback2, clip.duration);
clip.addIncident(
  top("100%", getClassNameText(2), 600, "easeOutCirc"),
  clip.duration
);
clip.addIncident(
  top("-100%", getClassNameImage(2), 600, "easeOutCirc"),
  clip.duration - 600
);

clip.addIncident(
  top("0%", getClassNameText(3), 600, "easeOutCirc"),
  clip.duration
);
clip.addIncident(
  top("0%", getClassNameImage(3), 600, "easeOutCirc"),
  clip.duration - 600
);
clip.addIncident(songPlayback3, clip.duration);
clip.addIncident(
  top("100%", getClassNameText(3), 600, "easeOutCirc"),
  clip.duration
);
clip.addIncident(
  top("-100%", getClassNameImage(3), 600, "easeOutCirc"),
  clip.duration - 600
);

clip.addIncident(top("50%", ".tmin", 600, "easeOutCirc"), clip.duration);
clip.addIncident(mapClip, 0);
