import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portafoglio',

  projectId: 'zbmy2o19',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  //TODO: Not working yet
  parts: [
    {
      implements: 'part:@sanity/base/absolutes',
      path: './bundleChecker.js',
    },
  ],
})
