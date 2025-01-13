import type { CollectionConfig } from 'payload'

export const Spells: CollectionConfig = {
    slug: 'Spells',
    admin: {
        useAsTitle: "name"
    },
    fields: [
        {
            name: "name",
            type: 'text'
        },
        {
            name: "Icon",
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: "Spell Type",
            type: "select",
            options: [
                { label: "Charm", value: "Charm" },
                { label: "Hex", value: "Hex" },
                { label: "Jinx", value: "Jinx" },
                { label: "Curse", value: "Curse" },
                { label: "Spell", value: "Spell" },
                { label: "Transfiguration", value: "Transfiguration" },
                { label: "Enchantment", value: "Enchantment" },
            ]
        },
        {
            name: "Description",
            type: "textarea",
        },
        {
            name: "category",
            type: "select",
            options: [
                { label: "Utility", value: "Utility" },
                { label: "Combat", value: "Combat" },
                { label: "Defensive", value: "Defensive" },
                { label: "Healing", value: "Healing" },
                { label: "Offensive", value: "Offensive" },
                { label: "Fun/Entertainment", value: "Fun/Entertainment" },
                { label: "Forbidden/Dark Magic", value: "Forbidden/Dark Magic" },
            ]
        },
        {
            name: "difficulty",
            type: "select",
            options: [
                { label: "Beginner", value: "Beginner" },
                { label: "Intermediate", value: "Intermediate" },
                { label: "Advanced", value: "Advanced" },
                { label: "Master-Level", value: "Master-Level" },
            ]
        }
    ]
}