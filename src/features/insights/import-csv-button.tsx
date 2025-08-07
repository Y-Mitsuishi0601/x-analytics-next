"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface ImportCSVButtonProps {
    onFileSelect?: (file: File) => void;
}

export function ImportCSVButton({ onFileSelect }: ImportCSVButtonProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImportCSV = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="flex justify-end mb-4">
            <Button
                variant="default"
                onClick={handleImportCSV}
                className="transition-transform transform hover:scale-105"
            >
                + Import CSV
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                accept=".csv"
                style={{ display: "none" }}
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        if (onFileSelect) onFileSelect(file);
                        else console.log("Uploaded file:", file);
                    }
                }}
            />
        </div>
    );
}
