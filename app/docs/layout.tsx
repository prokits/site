import React from 'react';
import Sidebar from './_components/sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl mx-auto flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    )
}