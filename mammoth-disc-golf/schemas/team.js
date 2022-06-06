export default {
  name: "team",
  type: "document",
  title: "Team",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      title: "Home Town",
      type: "string",
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Bio",
      type: "text",
    },



    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    
    },



    {
      name: "disc",
      type: "string",
      title: "Disc",
      options: {
        list: [
          { value: "boss", title: "Boss" },
          { value: "buzz", title: "Buzz" },
          { value: "esp", title: "ESP Putter" },
        ],
      },
    },

    {
      name: "link",
      type: "url",
    },

    
  ],
};