"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Overview } from "./_components/overview"
import { AccountsAndPosts } from "./_components/accounts-and-posts"
import { Storage } from "./_components/storage"
import styles from "./page.module.css"

export default function ProjectPage() {
    return (
      <Tabs defaultValue="overview" className={styles.container}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="posts-and-accounts">Posts And Accounts</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
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