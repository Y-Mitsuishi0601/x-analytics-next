"use client"

import { ImportCSVButton } from "@/features/insights/import-csv-button";
import { NextActionSection } from "@/features/insights/components/next-action-section";
import { ProjectSummarySection } from "@/features/insights/components/project-summary-section";
import { KeywordsHashtagsSection } from "@/features/insights/components/keywords-hashtags-section";

export function InsightsTabContainer() {
    return (
        <div className="p-6">
            <div className="space-y-6">
                <ImportCSVButton />
                <NextActionSection />
                <ProjectSummarySection />
                <KeywordsHashtagsSection />
            </div>
        </div>
    );
}