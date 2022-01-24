import { HTMLClip,loadPlugin,CSSEffect } from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
import MapsDef from "@donkeyclip/motorcortex-ol";


import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { comboTop, fadeOut,width,top, left, transform, fadeIn, widthHeight,height, filterInvert, fillStroke, color } from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";

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
});

const drawTree = new SVGD.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
    initialValues:{
      cover:0
    }
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
// 40.5866655,22.9605131
const base = MapsDef.utils.fromLonLat([22.962279589437337,40.586910407551436]);
const bern = MapsDef.utils.fromLonLat([7.4458, 46.95]);
const finish = MapsDef.utils.fromLonLat([ 37.617901652844886,55.7584553026527,]);
const mapClip = new Maps.Clip(
  {
    parameters: {
      view: { center: base, zoom: 18 }
    }
  },
  {
    selector: ".map-wrapper",
    containerParams: { width: "800px", height: "800px" },
    initParams: {color:"@initParams.color"},
  }
);

const gotoBern = new Maps.GoTo(
  {
    animatedAttrs: {
      goto: {
        zoom: 4,
        center: bern
      }
    }
  },
  { duration: 1500, selector: "!#olmap",easing:"easeOutCirc" }
);

mapClip.addIncident(gotoBern, 3900);

const gotoFinish = new Maps.GoTo(
  {
    animatedAttrs: {
      goto: {
        zoom: 10,
        center: finish
      }
    }
  },
  { duration: 1000, selector: "!#olmap",easing:"easeOutCirc" }
);

mapClip.addIncident(gotoFinish, 5400);



clip.addIncident(drawTree,0)
clip.addIncident(fillLogo,1000)
clip.addIncident(width("100%",".text-wraper", 1000,'easeInOutQuint'), 1001);
clip.addIncident(top("0%",".name", 600,'easeInOutQuint'), 1500);
clip.addIncident(top("0%",".description-wraper > .description", 600,'easeInOutQuint'), 1700);
clip.addIncident(top("850px",".logo-wrapper", 600,"easeOutCirc"), 3300);
clip.addIncident(left("-620px",".logo-wrapper", 600,"easeOutCirc"), 3300);
clip.addIncident(transform(.2,".logo-wrapper", 600,"easeOutCirc"),3300);
clip.addIncident(fadeIn(".map-slide",600,"easeOutCirc"),3300)
clip.addIncident(top("0%",".map-slide", 600,"easeOutCirc"), 3300);
clip.addIncident(widthHeight("800px",".map-wrapper", 600,"easeOutCirc"), 3300);
clip.addIncident(top("0px",".message-description,.message-heading", 600,"easeOutCirc","@stagger(0, 400)"), 3700);
clip.addIncident(top("100%",".message-description,.message-heading", 600,"easeOutCirc","@stagger(0, 400)"), 9000);
clip.addIncident(left("25%",".map-wrapper", 800,"easeOutCirc"), 9300);
clip.addIncident(top("20%",".map-wrapper", 800,"easeOutCirc"), 9300);
clip.addIncident(transform(3,".map-wrapper", 800,"easeOutCirc"), 9300);
clip.addIncident(filterInvert(".map-wrapper",800),9300)
clip.addIncident(fillStroke("#fff",".mc-logo-path",800), 9300);
clip.addIncident(color("#fff",".name,.description",800),9300)
clip.addIncident(height("720px",".news-wrapper",800,"easeInOutQuint"),9300)
clip.addIncident(width("1280px",".news-wrapper",800,"easeInOutQuint"),10100)
clip.addIncident(comboTop("0%","100%",".article-text-wrapper",'easeInOutQuint',"@stagger(0, 6000)"),10500);
clip.addIncident(comboTop("0%","-100%",".article-image",'easeInOutQuint',"@stagger(0, 6000)"),10500);
clip.addIncident(top("50%",".tmin", 600,"easeOutCirc"),20100);
clip.addIncident(mapClip,0)
