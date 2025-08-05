"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Insights } from "./_components/insights/insights"
import { AccountsAndPosts } from "./_components/accounts-and-posts"
import { Storage } from "./_components/storage/storage"
import styles from "./page.module.css"

export default function ProjectPage() {
    return (
      <Tabs defaultValue="insights" className={styles.container}>
        <TabsList>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="posts-and-accounts">Posts And Accounts</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>
        <TabsContent value="insights">
          <Insights />
        </TabsContent>
        <TabsContent value="posts-and-accounts">
          <AccountsAndPosts />
        </TabsContent>
        <TabsContent value="storage">
          <Storage />
        </TabsContent>
      </Tabs>
    )
}