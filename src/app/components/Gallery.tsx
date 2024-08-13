import { Galeria } from "@/components/data/galerrys"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AboutImg } from "@/utils/aboutImgs"


export const Gallery = () => {
    return (
        <div id="Galeria" className=" container  bg-black mt-4 flex flex-col justify-center items-center h-[100%]  mb-8">
            <div>
                <h1 className="text-white mb-4  uppercase text-2xl font-bold ">Galeria</h1>
            </div>
            <div className=" text-white container mx-auto  bg-blueDark h-[70%]  ">
                <Card className="relative group w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 bg-gray-900 border-none ">
                    {Galeria.map((item) => (

                        <CardHeader key={item.id} className=" object-cover" >
                           
                            <div className="relative  h-[165px]">
                                
                                {AboutImg(item)}
                                <img className=" w-full h-full rounded-sm object-cover" src={`${item.url}`} alt={`${item.name}`} />
                            </div>
                          
                        </CardHeader>

                    ))}
                </Card>
            </div >
        </div >
    )
}