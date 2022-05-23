export default {
    location: {
      label: "Location",
      type: "array",
      optional: false,
      items: "number",
    },
    greetingMessage: {
      label: "Greeting Message",
      type: "string",
      optional: true,
      default: "Morning",
    },
    articles:{
      label: "Articles",
      type: "array",
      optional: false,
      items:"object",
    }

  };