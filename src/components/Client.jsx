import React from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { deleteClient } from '../data/clients';

export const action = async ({ params }) => {
  await deleteClient(params.id);
  return redirect('/');
};

const Client = ({ client }) => {
  const navigate = useNavigate();

  const { name, phone, email, company, id } = client;
  return (
    <tr className="border-b">
      <td className="p-1 md:p-3 space-y-1 text-gray-600">
        <p className="text-lg md:text-lg">{name}</p>
        <p className="text-sm md:text-md">{company}</p>
      </td>
      <td className="p-1 md:p-3 space-y-1 text-gray-600">
        <p className="text-lg md:text-lg">
          Email: <span>{email}</span>
        </p>
        <p className="text-lg md:text-lg">
          Phone: <span>{phone}</span>
        </p>
      </td>

      <td>
        <button
          className="font-bold p-2 text-[#6cbdc3] hover:text-[#338388]"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>

        <Form
          method="post"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm('Do you want to delete this item?')) {
              e.preventDefault();
            }
          }}
        >
          <button className="font-bold p-2 text-[#dd725c] hover:text-[#a74937]">
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Client;
