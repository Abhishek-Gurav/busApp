import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "@/styles/globals.css";

export const metadata = {
    title : 'IMS',
    description : "my first next js app"
}

const inter = Inter({subsets:['latin']})

export default function RootLayout({children}){
    return (
        <ClerkProvider>
            <html>
                <body className={`${inter.className} w-full auth flex flex-1 justify-center bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}