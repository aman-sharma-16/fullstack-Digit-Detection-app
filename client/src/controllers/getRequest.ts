export const GetRequest = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error("Error getting the data");
    }
    return result;
    //   console.log(result);
  } catch (error: any) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};
