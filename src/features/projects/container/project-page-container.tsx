"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { InsightsTabContainer } from "@/features/insights/container/insights-tab-container";
import { AccountsTabContainer } from "@/features/accounts/container/accounts-tab-container";
import { StorageTabContainer } from "@/features/storage/container/storage-tab-container";
import styles from "@/app/(authenticated)/projects/page.module.css";

export function ProjectPageContainer() {
  return (
    <Tabs defaultValue="insights" className={styles.container}>
      <TabsList>
        <TabsTrigger value="insights">Insights</TabsTrigger>
        <TabsTrigger value="posts-and-accounts">Posts And Accounts</TabsTrigger>
        <TabsTrigger value="storage">Storage</TabsTrigger>
      </TabsList>
      <TabsContent value="insights">
        <InsightsTabContainer />
      </TabsContent>
      <TabsContent value="posts-and-accounts">
        <AccountsTabContainer />
      </TabsContent>
      <TabsContent value="storage">
        <StorageTabContainer />
      </TabsContent>
    </Tabs>
  );
}
