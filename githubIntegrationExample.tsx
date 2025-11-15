import React from "react";

/**
 * Mini ArkT Github Example
 * -------------------------------------------
 */

type NodeType = "service" | "db" | "frontend";

type ArktNode = {
    id: string;
    type: NodeType;
    dependsOn: string[];
}

type CommitEvent = {
    author: string;
    message: string;
    changedFiles: string[];
}

// Tiny system diagram (ArkT-style)
const system: ArktNode[] = [
    { id: "frontend", type: "frontend", dependsOn: ["api"] },
    { id: "api", type: "service", dependsOn: ["database", "auth"] },
    { id: "database", type: "db", dependsOn: [] },
    { id: "auth", type: "service", dependsOn: ["database"] },
];


export default function GithubIntegrationExample() {
    return (
        <div>
            <h1>Github Integration Example</h1>
        </div>
    );
}





