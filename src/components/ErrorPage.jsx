import { useRouteError } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';

const ErrorPage = () => {
  const error = useRouteError();
//   console.log(error);
  return (
    <div className="space-y-8">
      <h1 className="text-center text-3xl md:text-6xl font-extrabold mt-20 text-[#3A8891]">
        Pennyworth ~ CRM
      </h1>
      <div className="flex items-center justify-center">
        <p className="text-center text-gray-500 text-xl md:text-2xl font-bold">
          sorry it seems that an error has occurred
        </p>
        <BiErrorCircle className="text-4xl ml-6 text-gray-500" />
      </div>
      <p className="text-center text-gray-500 text-sm md:text-xl font-light">
        {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
