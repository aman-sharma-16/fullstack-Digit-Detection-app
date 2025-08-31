type OutputBoxProps = {
  predictedNumber?: number;
};

const OutputBox = ({ predictedNumber }: OutputBoxProps) => {
  return (
    <div className="h-full bg-gray-900 pt-4">
      <div className="relative text-white w-72 h-64 bg-black mx-auto flex flex-col justify-center items-center rounded-md">
        <span className="absolute top-4">Predicted Number :</span>
        <span className="scale-[12]">{predictedNumber}</span>
      </div>
    </div>
  );
};

export default OutputBox;
