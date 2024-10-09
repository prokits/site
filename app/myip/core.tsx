"use client"

import useIP from "@/hooks/useIP"
import MapDisplay from "./_components/map"
import { FaInfoCircle } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"

function IPPageSkeleton() {
    return (
        <div>
            <Skeleton className="h-20 w-96 bg-white/10 mb-6" />
            <div className="flex flex-col justify-start gap-1 text-gray-300">
                <Skeleton className="h-44 w-96 bg-white/10 mb-6" />
                <Skeleton className="h-[300px] w-full min-w-[800px] bg-white/10 mb-8" />
                <Skeleton className="h-[300px] w-full min-w-[800px] bg-white/10" />
            </div>
        </div>
    )
}

export default function IPCore() {
    const data = useIP("full")

    if (!data) {
        return <IPPageSkeleton />
    }

    return (
        <div>
            <div className="pb-6">
                <h1 className="text-6xl font-bold py-2 mb-2 bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent">{data.ipAddress}</h1>
                <div className="flex flex-col justify-start gap-1 text-gray-300">
                    {/* <h3>ISP: {data.isp}</h3> */}
                    {/* <h3>ASN: {data.organization}</h3> */}
                    <h3>Region: {data.regionName}</h3>
                    <h3>Location: {data.cityName}, {data.countryName} - {data.continent}</h3>
                    <h3>Language: {data.language}</h3>
                    <h3>Currency: {data.currency?.name} ({data
                        .currency?.code})</h3>
                    <h3>Timezone: {data.timeZone}</h3>
                </div>
            </div>

            <div>
                <h4 className="flex justify-start items-center gap-2 pb-2">
                    <h3 className="text-sm font-bold text-gray-200">Approximate Location</h3>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger><FaInfoCircle /></TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    The approximate location is based on the IP address and may not be accurate.
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </h4>
                <MapDisplay latitude={data.latitude as number} longitude={data.longitude as number} />
            </div>

            {/* Raw Data */}
            <div className="pt-6">
                <h4 className="text-gray-200 text-sm font-bold py-2">Raw Data</h4>
                <pre className="overflow-x-auto text-gray-400 bg-zinc-800 p-4 rounded-lg max-w-[800px]">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    )
}