import { useLoaderData } from "react-router-dom";
import type { searchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
    const { searchResults } = useLoaderData() as searchLoaderResult;
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name} />
    });

    return (
        <div>
            <p className="text-2xl font-bold my-6">Search Results</p>
            <div className="space-y-4 mt-4">
                {renderedResults}
            </div>
        </div>

    );
}