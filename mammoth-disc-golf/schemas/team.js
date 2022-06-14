export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'title',
      type: 'string',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },

    {
      name: 'link',
      type: 'url',
    },
  ],
}
