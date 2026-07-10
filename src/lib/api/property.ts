

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// types/property.ts

export interface Property {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    location: string;
    date: string;
    category: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    garage: number;
    propertyType: string;
    featured: boolean;
    isActive: string;
}


export const getAllProperty = async (isActive: "active" | "inactive" ): Promise<Property[]> => {
    const res = await fetch(`${baseUrl}/api/all-properties?isActive=${isActive}`);
    return res.json();
};