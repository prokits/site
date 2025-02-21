import Link from 'next/link';

interface DocGroup {
    title: string;
    items: { title: string; path: string }[];
}

const docGroups: DocGroup[] = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', path: '/docs/introduction' },
            { title: 'Installation', path: '/docs/installation' },
        ],
    },
    {
        title: 'Core Concepts',
        items: [
            { title: 'DNS', path: '/docs/dns' },
            { title: 'AdGuard Setup', path: '/docs/adguard' },
            { title: 'PiHole Setup', path: '/docs/pihole' },
        ],


    },
    // Add more groups as needed
];

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 p-4 mt-12">
            <Link href="/docs">
                <h1 className="text-xl font-bold mb-4">Documentation</h1>
            </Link>
            {docGroups.map((group, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-md font-semibold mb-2">{group.title}</h2>
                    <ul>
                        {group.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-1">
                                <Link href={item.path} className="text-gray-400 hover:underline">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;