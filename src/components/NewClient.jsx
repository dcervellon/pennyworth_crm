import { BsArrowReturnLeft } from 'react-icons/bs';
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom';
import { addClient } from '../data/clients';
import ClientForm from './ClientForm';
import Error from './Error';

//todo:: Get Form Data
export const action = async ({ request }) => {
  const formData = await request.formData('name');
  const data = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validation
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('All fields are required');
  }

  // validate a email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push('The email is not valid ');
  }

  // Return errors
  if (Object.keys(errors).length) {
    return errors;
  }

  await addClient(data);

  return redirect('/');
  // return { ok: true };
};

const NewClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  console.log(errors);
  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl text-[#3A8891] md:mt-10">
        New Client
      </h1>
      <p className="font-light text-lg md:text-xl text-[#3A8891]">
        Fill in all the fields to register a new customer
      </p>

      <div className="flex justify-end">
        <button
          className="bg-[#57b1bb] hover:bg-[#3A8891] transition-all px-2 md:px-4 py-1 md:py-2 rounded-md items-center font-black text-white flex"
          onClick={() => navigate('/')}
        >
          Return
          <span className="text-xl ml-3">
            <BsArrowReturnLeft />
          </span>
        </button>
      </div>

      <div className="border-2 border-[#57b1bb] shadow rounded-md md:w-3/4 mx-auto px-2 md:px-4 py-4 md:py-6 mt-8">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post">
          <ClientForm />
          <input
            type="submit"
            value={'Register'}
            className="mt-1 w-full bg-[#57b1bb] hover:bg-[#3a8891] font-bold text-white text-lg rounded-md py-1 uppercase"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
