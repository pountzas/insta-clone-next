import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser side 
function signin({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
