import { MouseEvent, useState } from "react";

type InputFormProps = {
  classifyImage: Function;
};

const InputForm = ({ classifyImage }: InputFormProps) => {
  const [image, setImage] = useState<string | undefined>();

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const num_array : number[] = JSON.parse(image!)
    classifyImage(num_array);
  };
  return (
    <div>
      <form
        action=""
        className="relative bg-zinc-900 h-[50dvh] mx-auto flex flex-col justify-center items-center gap-y-8"
      >
        <div>
          <label
            htmlFor="InputImage"
            className="relative text-white font-semibold"
          >
            Image file :
          </label>
          <br />
          <textarea
            name="inputImage"
            id="InputImage"
            className="resize-none w-[340px] md:w-[800px] h-40 rounded-md p-2 focus:border-none focus:outline-none font-semibold bg-gray-400 shadow-md border border-gray-200 mt-4"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="text-white font-semibold bg-sky-700 border-2 border-gray-300 w-32 h-8 rounded-md hover:bg-sky-600"
          onClick={handleSubmit}
        >
          Detect
        </button>
      </form>
    </div>
  );
};

export default InputForm;
