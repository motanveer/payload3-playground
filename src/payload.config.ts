// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Wizards } from './collections/Wizards'
import { Houses } from './collections/Houses'
import { Spells } from './collections/Spells'
import { Wands } from './collections/Wands'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      views: {
        customView: {
          Component: '@/components/CustomView.tsx', 
          path: '/custom-view',
        }
      },
      beforeLogin: ['@/components/BeforeLogin.tsx'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Wizards, Houses, Spells, Wands],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
