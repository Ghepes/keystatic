import { config, collection, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          // Configurare pentru a permite inserarea de imagini și videoclipuri în conținut
          options: {
            image: {
              directory: 'public/ghepes/img/',
              publicPath: '/ghepes/img/',
            },
            video: {
              directory: 'public/ghepes/img/',
              publicPath: '/ghepes/img/',
            },
          },
        }),
        // Câmp pentru imaginea principală a postării
        mainImage: fields.image({
          label: 'Main Image',
          directory: 'public/ghepes/img/',
          publicPath: '/ghepes/img/',
        }),
        // Câmp pentru fișier video asociat postării
        videoFile: fields.file({
          label: 'Video File',
          directory: 'public/ghepes/img/',
          publicPath: '/ghepes/img/',
        }),
      },
    }),
  },
});
