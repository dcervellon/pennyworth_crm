const ClientForm = ({ client }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-700" htmlFor="nombre">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Customer Name"
          name="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-700" htmlFor="empresa">
          Company:
        </label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Customer Company"
          name="company"
          defaultValue={client?.company}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Customer E-mail"
          name="email"
          defaultValue={client?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700" htmlFor="telefono">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md"
          placeholder="Customer Phone"
          name="phone"
          defaultValue={client?.phone}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700" htmlFor="notas">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-100 rounded-md h-24 align-self resize-none"
          placeholder="Customer Notes"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};

export default ClientForm;
