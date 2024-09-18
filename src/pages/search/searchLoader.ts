import { searchPackages } from "../../api/queries/searchPackeges";
import type { PackageSummery } from "../../api/types/packageSummary";

export interface searchLoaderResult {
    searchResults: PackageSummery[];
}

export async function searchLoader({ request }: {
    request: Request
}): Promise<searchLoaderResult> {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    if (!term) {
        throw new Error("Search term must be provided");
    }

    const results = await searchPackages(term);

    return {
        searchResults: results
    };
}