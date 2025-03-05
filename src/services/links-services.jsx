import { BASE_API_URL } from "@/config/env";

export async function getLinks(forProductDetail = 0) {
  const url = BASE_API_URL + `/links?forProductDetail=${forProductDetail}`;
  console.log(url);
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Links : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
