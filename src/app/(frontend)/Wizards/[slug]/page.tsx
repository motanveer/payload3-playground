import payloadAPI from '@/lib/payload'
import { Wizard } from '@/payload-types'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RefreshRouteOnSave } from '@/components/RefreshRouteOnSave'


/**
 * WizardView Component - Displays detailed information about a specific wizard
 * @param {Object} props - Component props
 * @param {Object} props.params - URL parameters
 * @param {string} props.params.slug - The slug identifier for the wizard
 * @returns {Promise<JSX.Element>} Rendered wizard view component
 */
const WizardView = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const normalizedSlug = slug.toLowerCase()

    const wizardResponse = await payloadAPI.find({
        collection: 'wizards',
        where: { slug: { equals: normalizedSlug } }
    })
    
    console.log("🔥",wizardResponse)

    const wizard: Wizard = wizardResponse.docs[0]
    
    // Add type guard for House
    type HouseType = { name: string }
    const isHouseObject = (house: any): house is HouseType => 
        typeof house === 'object' && house !== null && typeof house.name === 'string'

    return (
        <div className="container mx-auto py-8 px-4">
            <RefreshRouteOnSave />
            <Card className="max-w-md mx-auto border-black border-2 shadow-none">
                <CardHeader className="border-b border-black">
                    <CardTitle className="text-2xl font-bold">{wizard.name}</CardTitle>
                    {wizard.Info?.House && isHouseObject(wizard.Info.House) && (
                        <CardDescription className="text-md">
                            {wizard.Info.House.name}
                        </CardDescription>
                    )}
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                    {wizard.Photo && (
                        <div>
                            <img 
                                src={typeof wizard.Photo === 'object' && wizard.Photo !== null ? wizard.Photo.url : ''} 
                                alt={typeof wizard.Photo === 'object' && wizard.Photo !== null ? wizard.Photo.alt ?? wizard.name : wizard.name}
                                className="w-[1/2] max-h-[400px] object-cover"
                            />
                        </div>
                    )}
                    
                    {wizard.Info?.Bio && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Biography</h3>
                            <p className="text-sm text-gray-600">{wizard.Info.Bio}</p>
                        </div>
                    )}

                    {wizard.Wands?.docs && wizard.Wands.docs.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Wands</h3>
                            <div className="space-y-3">
                                {wizard.Wands.docs.map((wand) => (
                                    <div key={wand.id} className="border-b border-gray-100 pb-3">
                                        <h4 className="text-sm font-medium mb-1">{wand.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {wand['Wood Type']} wood, {wand['Core Type']} core
                                            {wand.attributes?.length ? `, ${wand.attributes.length}"` : ''}
                                            {wand.attributes?.flexibility ? `, ${wand.attributes.flexibility}` : ''}
                                        </p>
                                        {wand.description && (
                                            <p className="text-sm text-gray-500 mt-1">{wand.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="border-t border-black py-3">
                    <p className="text-xs text-gray-500 w-full">
                        Last updated: {new Date(wizard.updatedAt).toLocaleDateString()}
                    </p>
                </CardFooter>
            </Card>
        </div>
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
    
    const params = data.docs.map((wizard: Wizard) => ({
        slug: wizard.slug
    }))

    return params
}