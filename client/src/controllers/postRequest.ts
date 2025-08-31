export const PostRequest = async (image: number[]) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/classify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
      }),
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

