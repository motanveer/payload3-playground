import Image from "next/image";
import payloadAPI from "@/lib/payload";
import { House, Wizard } from "@/payload-types";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Houses } from "@/collections/Houses";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const result = await payloadAPI.find({
    collection: 'wizards', // required
    depth: 5,
  })
  
  //Query House collection
  const houseResponse = await payloadAPI.find({
    collection: 'Houses',
  })
  
  //Store response in a type-safe structure
  const houses: House[] = houseResponse.docs
  
  
  
  
  //console.log(houses)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <RefreshRouteOnSave />
        <Image
          className="dark:invert self-center"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex flex-col gap-8 md:flex-row">

        {
          houses.map((House, index) =>{
            let members = House.Members?.docs;
            
            return(
            <Card key={index} className="p-4 hover:cursor-pointer hover:translate-y-4 hover:px-12 hover:scale-105 hover:border-black transform-gpu group">
              <CardHeader>
                <CardTitle className="text-lg font-bol group-hover:translate">{House.name}</CardTitle>
                <CardDescription>{House.Description}</CardDescription>
              </CardHeader>
              <Separator className="mb-4"/>
              <CardContent>
               <p className="text-sm"><span className="font-semibold">Animal: </span>{House.Attributes?.Animal}</p>
               <p className="text-sm"><span className="font-semibold">Colors: </span>{House.Attributes?.Colors}</p>
               <p className="text-sm"><span className="font-semibold">Founder: </span>{House.Attributes?.Founder}</p>
              </CardContent>
            </Card>
            )
          })
        }
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

