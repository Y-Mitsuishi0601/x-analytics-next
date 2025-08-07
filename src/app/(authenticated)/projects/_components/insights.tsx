"use client"

import { ImportCSVButton } from "@/components/ui/insights/import-csv-button";
import { NextActionSection } from "@/components/ui/insights/next-action-section";
import { ProjectSummarySection } from "@/components/ui/insights/project-summary-section";
import { KeywordsHashtagsSection } from "@/components/ui/insights/keywords-hashtags-section";

export function Insights() {
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