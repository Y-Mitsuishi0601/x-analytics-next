"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountsTabContent } from "@/features/accounts/components/accounts-tab-content";
import { PostsTabContent } from "@/features/accounts/components/posts-tab-content";

export function AccountsTabContainer() {
    return (
        <div className="p-6">
            <Tabs defaultValue="accounts" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="accounts">Accounts</TabsTrigger>
                    <TabsTrigger value="posts">Posts</TabsTrigger>
                </TabsList>
                <TabsContent value="accounts">
                    <AccountsTabContent />
                </TabsContent>
                <TabsContent value="posts">
                    <PostsTabContent />
                </TabsContent>
            </Tabs>
        </div>
    );
}
