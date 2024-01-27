type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchHandlerProps {
  url: string;
  method: RequestMethod;
  headers?: HeadersInit;
  body?: any;
  goodCallback: (response: Response) => void;
  badCallback?: (response: Response) => void;
}

export async function fetchHandler({
  url,
  method,
  headers,
  body,
  goodCallback,
  badCallback,
}: FetchHandlerProps) {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    });
    console.log(response);
    if (!response.ok) {
      if (badCallback) {
        badCallback(response);
      } else {
        if (response.status !== 403) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
    } else {
      if (goodCallback) {
        goodCallback(response);
      }
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(`Error fetching data: ${errorMessage}`);
  }
}
