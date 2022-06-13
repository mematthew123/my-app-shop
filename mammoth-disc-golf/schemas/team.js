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
      name: 'description',
      title: 'Bio',
      type: 'text',
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
      name: 'link',
      type: 'url',
    },
  ],
}
