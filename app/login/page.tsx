import { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata : Metadata = {
  title : "Login",
}
export default function Page() {
  return (
    <>
      <LoginForm />
    </>
  )
}
