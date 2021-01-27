import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person',
  title: 'Slicemaster',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: "Slicemaster's name",
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      }

    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Provide a short Bio'
    }
  ]
}