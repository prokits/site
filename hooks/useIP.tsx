import { useState, useEffect } from "react";

// Sample Output
/**
 * 
 * {
    "ipVersion": 4,
    "ipAddress": "49.36.144.254",
    "latitude": 28.666775,
    "longitude": 77.216682,
    "countryName": "India",
    "countryCode": "IN",
    "timeZone": "+05:30",
    "zipCode": "110008",
    "cityName": "Delhi",
    "regionName": "Delhi",
    "continent": "Asia",
    "continentCode": "AS",
    "isProxy": false,
    "currency": {
        "code": "INR",
        "name": "Indian Rupee"
    },
    "language": "English",
    "timeZones": ["Asia/Kolkata"],
    "tlds": [".in"]
}
 */

export interface IPData {
    ipVersion?: number;
    ipAddress: string;
    latitude?: number;
    longitude?: number;
    countryName?: string;
    countryCode?: string;
    timeZone?: string;
    zipCode?: string;
    cityName?: string;
    regionName?: string;
    continent?: string;
    continentCode?: string;
    isProxy?: boolean;
    currency?: {
        code: string;
        name: string;
    };
    language?: string;
    timeZones?: string[];
    tlds?: string[];
    asn?: string;
    organization?: string;
}

function useIP(mode: "fast" | "full" = "fast") {
    const [ipData, setIP] = useState<IPData | null>(null);

    useEffect(() => {
        if (mode === "fast") {
            fetch("https://api.ipify.org?format=json")
                .then((res) => res.json())
                .then((data) => setIP({ ipAddress: data.ip }));
        } else {
            fetch("https://freeipapi.com/api/json")
                .then((res) => res.json())
                .then((data: IPData) => setIP(data));
        }
    }, []);



    return ipData;
}

export default useIP;