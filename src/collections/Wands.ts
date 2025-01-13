import type { CollectionConfig } from 'payload';

export const Wands: CollectionConfig = {
    slug: 'wands',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: "name",
            type: "text"
        },
        {
            name: "owner",
            type: "relationship",
            relationTo: "wizards"
        },
        {
            name: "Wood Type",
            type: "select",
            options: [
                { label: "Holly", value: "Holly" },
                { label: "Yew", value: "Yew" },
                { label: "Ash", value: "Ash" },
                { label: "Vine", value: "Vine" },
                { label: "Elder", value: "Elder" },
                { label: "Walnut", value: "Walnut" },
                { label: "Maple", value: "Maple" },
                { label: "Cherry", value: "Cherry" },
                { label: "Willow", value: "Willow" },
            ],
        },
        {
            name: "Core Type",
            type: "select",
            options: [
                { label: "Phoenix Feather", value: "Phoenix Feather" },
                { label: "Dragon Heartstring", value: "Dragon Heartstring" },
                { label: "Unicorn Hair", value: "Unicorn Hair" },
                { label: "Thestral Tail Hair", value: "Thestral Tail Hair" },
                { label: "Basilisk Fang", value: "Basilisk Fang" },
            ],
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "attributes",
            type: "group",
            fields: [
                {
                    name: "length",
                    type: "number",
                    label: "Length (inches)",
                },
                {
                    name: "flexibility",
                    type: "select",
                    options: [
                        { label: "Unyielding", value: "Unyielding" },
                        { label: "Slightly Springy", value: "Slightly Springy" },
                        { label: "Supple", value: "Supple" },
                        { label: "Hard", value: "Hard" },
                        { label: "Flexible", value: "Flexible" },
                        { label: "Brittle", value: "Brittle" },
                    ],
                },
            ],
        },

    ],
};