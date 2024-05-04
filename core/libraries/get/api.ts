import grabError from "./error";

type Props = {
  url: string;
};

const api = async ({ url: getUrl }: Props) => {
  try {
    const url = new URL(`${process.env.API_BASE_URL}${getUrl}`);
    url.searchParams.set("api_key", process.env.API_KEY!);
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(url.toString(), options);
    const data = await response.json();

    if (data.results) return data.results;
    return data;
  } catch (error) {
    console.error(`Error fetching in ${getUrl}:`, error);
    return grabError(error);
  }
};

export default api;
