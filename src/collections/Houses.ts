import { join } from 'path'
import type { CollectionConfig } from 'payload'

export const Houses: CollectionConfig = {
    slug: 'Houses',
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'Description']
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true
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
        name: 'Attributes',
        type: 'group',
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
        ],
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
  