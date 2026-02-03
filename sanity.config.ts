import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Lantern Books',

  projectId: 'w7lunhwo',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  deployment: {
    appId: 'dvw7h9ykw4cgjmghnwrf5c3u',
  },

  schema: {
    types: schemaTypes,
  },
})
