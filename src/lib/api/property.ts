

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

export interface PropertyResponse {
  data: Property[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export const getAllProperty = async (
  isActive: "active" | "inactive" = "active",
  page = 1,
  limit = 12,
  featured?: boolean,
  search?: string,
  type?: string,
  sort?: "newest" | "low-high" | "high-low"
): Promise<PropertyResponse> => {
  const params = new URLSearchParams({
    isActive,
    page: page.toString(),
    limit: limit.toString(),
  });

  if (featured !== undefined) {
    params.append("featured", String(featured));
  }

  if (search?.trim()) {
    params.append("search", search.trim());
  }

  if (type && type !== "all") {
    params.append("type", type);
  }

  if (sort && sort !== "newest") {
    params.append("sort", sort);
  }

  const res = await fetch(
    `${baseUrl}/api/all-properties?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  return res.json();
};


// property details page API
export const getPropertyById = async (id: string): Promise<Property> => {

  const res = await fetch(`${baseUrl}/api/properties/${id}`, { cache: "no-store", });

  if (!res.ok) {
    throw new Error("Failed to fetch property details");
  }

  return res.json();
};