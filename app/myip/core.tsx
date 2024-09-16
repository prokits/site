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
                <Skeleton className="h-[300px] w-1/2 bg-white/10" />
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
                <h1 className="text-6xl font-bold text-gray-200 py-2 mb-2">{data.query}</h1>
                <div className="flex flex-col justify-start gap-1 text-gray-300">
                    <h3>ISP: {data.isp}</h3>
                    <h3>AS: {data.as}</h3>
                    <h3>Location: {data.city}, {data.regionName}, {data.country}</h3>
                    <h3>Timezone: {data.timezone}</h3>
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
                <MapDisplay latitude={data.lat as number} longitude={data.lon as number} />
            </div>
        </div>
    )
}