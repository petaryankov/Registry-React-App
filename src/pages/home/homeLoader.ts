import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import { PackageDetails } from "../../api/types/packageDetails";

export interface HomeLoaderResult {
    featurePackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
    const featurePackages = await getFeaturedPackages();

    return {
        featurePackages
    }
}