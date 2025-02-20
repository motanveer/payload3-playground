import payloadAPI from '@/lib/payload'
import { Wizard } from '@/payload-types'
import React from 'react'

/**
 * WizardView Component - Displays detailed information about a specific wizard
 * @param {Object} props - Component props
 * @param {Object} props.params - URL parameters
 * @param {string} props.params.slug - The slug identifier for the wizard
 * @returns {Promise<JSX.Element>} Rendered wizard view component
 */
const WizardView = async ({ params }: { params: { slug: string } }) => {

    let {slug} = await params
    slug = slug.toLowerCase()

    const wizardResponse = await payloadAPI.find({
        collection: 'wizards',
        where: {slug: {equals: slug}}
    })
    
    console.log("🔥",wizardResponse)

    const wizard: Wizard = wizardResponse.docs[0]
    
  return (
    <div>WizardView</div>
  )
}

export default WizardView

/**
 * Generates static parameters for all wizard pages during build time
 * @returns {Promise<Array<{slug: string}>>} Array of slug parameters for each wizard
 */
export const generateStaticParams = async () => {
    const data = await payloadAPI.find({
        collection: 'wizards',
        limit: 100
    })
    
    const params = data.docs.map((wizard: Wizard) => (
        console.log("😡",wizard.slug),
        {
            slug: wizard.slug
        }
    ))

    return params
}