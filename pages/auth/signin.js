import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser side 
function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="logo" />

        <p className="font-xs italic">This is not a real App, it is built for educational purposes only.</p>

        <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    },
  };
}

export default signin;
