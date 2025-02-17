import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'


export const Houses: CollectionConfig = {
    slug: 'Houses',
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'Description'],
      livePreview:{
       url: ({ data }) => `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/Houses/${data.slug}`,
      }
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true
      },
      ...slugField(),
      {
        type: 'tabs',
        tabs:[
          {name: 'meta',
            fields:[
             
            ]
          },
          {name: 'attributes',
            fields: [
              {
                  name: 'Animal',
                  type: 'text'
              },
              {
                  name: 'Motto',
                  type: 'text',
              },
              {
                  name: 'Traits',
                  type: 'text'
              },
              {
                  name: 'Colors',
                  type: 'text'
              },
              {
                  name: 'Founder',
                  type: 'text',
              }
          ]
          }
        ]
      },
     
      {
        name: 'embelem',
        type: 'upload',
        relationTo: 'media'
      },
      {
        name: 'Description',
        type: 'textarea'
      },
      {
        name: 'notableMembers',
        label: "Notable Members",
        type: 'array',
        fields:[
            {
                name: 'Wizard',
                type: 'relationship',
                relationTo: 'wizards',
            }
        ]
      },
      {
        name: "Members",
        type: 'join',
        collection: 'wizards',
        on: 'Info.House',
        admin:{
            defaultColumns: ['name']
        }
      }
    ],
    
  }
  