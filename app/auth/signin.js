import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
	<div>
	  {Object.values(providers).map((provider) => (
		<div key={provider.name}>
		  <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
		</div>
	  ))}
	</div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
	props: { providers },
  };
}
