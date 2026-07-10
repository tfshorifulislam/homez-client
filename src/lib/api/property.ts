

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const getAllProperty = async (isActive = 'active') => {
    const res = await fetch(`${baseUrl}/api/all-properties?isActive=${isActive}`);
    return res.json();
}