import { useState, useEffect } from "react";

export type IPData = {
    status?: string;
    country?: string;
    countryCode?: string;
    region?: string;
    regionName?: string;
    city?: string;
    zip?: string;
    lat?: number;
    lon?: number;
    timezone?: string;
    isp?: string;
    org?: string;
    as?: string;
    query: string;
}

function useIP(mode: "fast" | "full" = "fast") {
    const [ipData, setIP] = useState<IPData | null>(null);

    useEffect(() => {
        if (mode === "fast") {
            fetch("https://api.ipify.org?format=json")
                .then((res) => res.json())
                .then((data) => setIP({ query: data.ip }));
        } else {
            fetch("http://ip-api.com/json/")
                .then((res) => res.json())
                .then((data) => setIP(data));
        }
    }, []);



    return ipData;
}

export default useIP;