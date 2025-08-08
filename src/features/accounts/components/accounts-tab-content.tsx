"use client";

import { Badge } from "@/components/ui/badge";
import { mockAccounts } from "@/mock/mockData";
import { AccountCard } from "@/features/accounts/components/account-card";

export function AccountsTabContent() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Accounts</h2>
                    <p className="text-muted-foreground">List of accounts with their recent posts</p>
                </div>
                <Badge variant="secondary">{mockAccounts.length} accounts</Badge>
            </div>
            <div className="space-y-4">
                {mockAccounts.map((account) => (
                    <AccountCard key={account.id} account={account} />
                ))}
            </div>
        </div>
    );
}
