import { CSSEffect,Combo } from "@donkeyclip/motorcortex";

export const transform = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: value,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const fadeOut = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const fadeIn = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );


  export const width = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const height = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const widthHeight = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
        height: value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );


  export const top = (value,selector, duration, easing = "linear",delay = 0,) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay
    }
  );

  export const left = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );



  export const filterInvert = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        filter: "grayscale(1) invert(1) blur(2px)",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );


  export const fillStroke = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fill: value,
        stroke:value
      },
      initialValues:{
        fill: "#FFFFFF",
        stroke:"#21084f"
      }
    },
    {
      selector,
      duration,
      easing,
    }
  );


  export const color = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        color: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );





  // export const comboTop = (start,end,selector, easing = "linear",delay) =>
  // new Combo(
  //   {
  //     incidents: [
  //       {
  //         incidentClass: CSSEffect,
  //         attrs: {
  //           animatedAttrs: {
  //             top: start
  //           }
  //         },
  //         props: {
  //           duration: 600,
  //           easing
  //         },
  //         position: 0
  //       },
  //       {
  //         incidentClass: CSSEffect,
  //         attrs: {
  //           animatedAttrs: {
  //             top: end
  //           }
  //         },
  //         props: {
  //           duration: 600,
  //           easing
  //         },
  //         position: 3000
  //       }
  //     ]
  //   },
  //   {
  //     selector,
  //     easing,
  //     delay
  //   }
  // );
