type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchHandlerProps {
  url: string;
  method: RequestMethod;
  headers?: HeadersInit;
  body?: any;
}

export async function fetchHandler({
  url,
  method,
  headers,
  body,
}: FetchHandlerProps) {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(`Error fetching data: ${errorMessage}`);
  }
}
