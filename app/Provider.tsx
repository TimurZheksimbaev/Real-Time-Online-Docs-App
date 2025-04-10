'use client'
import React from 'react'
import { ClientSideSuspense } from "@liveblocks/react"
import { LiveblocksProvider } from "@liveblocks/react"
import Loader from '@/components/Loader'
import { getClerkUser } from '@/lib/actions/user.actions'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LiveblocksProvider 
        authEndpoint='/api/liveblocks-auth' 
        resolveUsers={async ({userIds}) => {
            const users = await getClerkUser({userIds})
            return users
        }}
        >
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider