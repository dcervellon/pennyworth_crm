const Error = ({ children }) => {
  return (
    <>
      <p className="bg-red-400 text-center text-white font-bold text-lg md:text-xl rounded-md mb-4 py-1">
        {children}
      </p>
    </>
  );
};

export default Error;
