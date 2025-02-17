import React from 'react'
import payloadAPI from '@/lib/payload'
import { House } from '@/payload-types'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { RefreshRouteOnSave } from '@/components/RefreshRouteOnSave'

const HouseView = async ({ params }: { params: { slug: string } }) => {

    let { slug } = await params
    slug = slug.toLowerCase();
    //Query House collection

    console.log("🔥",slug)

    const houseResponse = await payloadAPI.find({
        collection: 'Houses',
        where: {
           slug:{
                equals: slug
            }
        }
    })

    const house: House = houseResponse.docs[0]
    console.log(houseResponse)

    return (
        <div className='flex justify-center items-center h-lvh'>
            <RefreshRouteOnSave />

            <Card className="self-center p-4 w-full sm:w-1/2 lg:w-1/4 hover:cursor-pointer border-black transform-gpu group 
                transition-all duration-300 ease-in-out
                hover:translate-y-4 hover:scale-105 hover:shadow-xl
                motion-safe:animate-fadeIn">
                <CardHeader className="transition-all duration-300 ease-in-out group-hover:translate-y-1">
                    <CardTitle className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">{house.name}</CardTitle>
                    <CardDescription className="transition-opacity duration-300 group-hover:opacity-80">{house.Description}</CardDescription>
                </CardHeader>
                <Separator className="mb-4 transition-colors duration-300 group-hover:bg-primary" />
                <CardContent className="transition-all duration-300 ease-in-out group-hover:translate-y-1">
                    <p className="text-sm transform transition-all duration-300 hover:translate-x-1"><span className="font-semibold">Animal: </span>{house.attributes?.Animal}</p>
                    <p className="text-sm transform transition-all duration-300 hover:translate-x-1"><span className="font-semibold">Colors: </span>{house.attributes?.Colors}</p>
                    <p className="text-sm transform transition-all duration-300 hover:translate-x-1"><span className="font-semibold">Founder: </span>{house.attributes?.Founder}</p>
                </CardContent>
            </Card>

        </div>
    )

};

export const generateStaticParams = async () => {
    const data = await payloadAPI.find({
        collection: 'Houses',
        limit: 100
    })



    const params = data.docs.map((house: House) => (
        console.log(house.slug),
        {
        slug: house.slug
    }))

    console.log('Generated Params:', params);

    return params;

}


export default HouseView