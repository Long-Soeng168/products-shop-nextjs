import { BASE_API_URL } from "@/config/env";

export async function getwebinfo() {
  const url = BASE_API_URL + `/webinfo`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 360,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch webinfo : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
