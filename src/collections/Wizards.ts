import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Wizards: CollectionConfig = {
  slug: 'wizards',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'Photo'],
    components:{
      beforeListTable: ['@/components/BeforeLogin.tsx', '@/components/DisplayAvatar.tsx'],

    },
    livePreview:{
      url: ({ data }) => `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/Wizards/${data.slug}`,
     }
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    ...slugField(),
    {
      name: 'Photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Info',
      type: 'group',
      fields: [
        {
          name: 'House',
          type: 'relationship',
          relationTo: 'Houses'
        },
        {
          name: 'Bio',
          type: 'textarea'
        }
      ],
    },
    {
      name: "Wands",
      type: "join",
     collection: "wands",
    on: 'owner'
    }
  ],
}
