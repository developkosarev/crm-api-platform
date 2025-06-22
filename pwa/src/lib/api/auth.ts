//import {signIn} from "next-auth/react";

export async function getCompanies() {
  // try {
  //   console.log('Sending form')
  //
  //   const res = await signIn("credentials", {
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //     redirect: false,
  //   });
  //
  //   if (res && !res.error) {
  //     router.push("/profile");
  //   } else if (res) {
  //     console.log('res');
  //     console.log(res);
  //
  //     setError(`${res.error} status ${res.status}.`);
  //   } else {
  //     setError('Something went wrong');
  //   }
  // } catch (err: unknown) {
  //   console.log('catch')
  //   console.log(err)
  //
  //   const error = err as { error?: string };
  //   setError(error.error || 'Something went wrong');
  // } finally {
  //   setIsSubmitting(false);
  // }


  //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`);
  //if (!res.ok) throw new Error('Failed to fetch companies');
  //return res.json();
}
