import { useLoaderData } from 'react-router-dom';
import empty from '../assets/images/empty.svg';
import Client from '../components/Client';
import { getClients } from '../data/clients';

export const loader = () => {
  // console.log(import.meta.env);
  const clients = getClients();

  return clients;
};

const Index = () => {
  const dataClients = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl text-[#3A8891] md:mt-10">
        Clients
      </h1>
      <p className="font-light text-lg md:text-xl text-[#3d8a92]">
        Manage your clients
      </p>

      {dataClients.length ? (
        <table className="w-full mt-6 table-auto shadow border-2 border-[#57b1bb] bg-white">
          <thead className="bg-[#3d8a92] text-white border-2 border-[#57b1bb]">
            <tr>
              <th className="p-1 md:p-2">Clients</th>
              <th className="p-1 md:p-2">Contact</th>
              <th className="p-1 md:p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dataClients.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-4 mt-20 flex flex-col items-center justify-center">
          <h4 className="text-gray-500 font-medium text-center text-lg md:text-2xl p-3">
            There are no customers, start by adding one.
          </h4>
          <img src={empty} alt="empty" className="w-52 md:w-72 md:mt-10" />
        </div>
      )}
    </>
  );
};

export default Index;
