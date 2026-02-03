import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'storyBook',
  title: 'Story Books',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'af',
          title: 'Afrikaans',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortIntroduction',
      title: 'Short Introduction',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required().max(200),
        },
        {
          name: 'af',
          title: 'Afrikaans',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required().max(200),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Story Content',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'Quote', value: 'blockquote'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'af',
          title: 'Afrikaans',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'Quote', value: 'blockquote'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFree',
      title: 'Free Story',
      type: 'boolean',
      description: 'Is this story available for free without authentication?',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageRange',
      title: 'Age Range',
      type: 'string',
      options: {
        list: [
          {title: '0-2 years', value: '0-2'},
          {title: '3-5 years', value: '3-5'},
          {title: '6-8 years', value: '6-8'},
          {title: '9-12 years', value: '9-12'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'averageRating',
      title: 'Average Rating',
      type: 'number',
      description: 'Calculated average rating from user reviews',
      readOnly: true,
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'coverImage',
      subtitle: 'ageRange',
    },
  },
})
