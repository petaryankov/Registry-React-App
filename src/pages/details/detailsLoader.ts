import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackages";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderAgrs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({ params }: LoaderAgrs): Promise<DetailsLoaderResult> {
    const { name } = params;

    if (!name) {
        throw new Error("Name must be provided");
    }

    const details = await getPackage(name);

    return {
        details
    };
}