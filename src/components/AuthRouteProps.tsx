import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'services/useAuth';

interface AuthRouteProps {
  children: React.ReactNode;
}

export default function AuthRoute({ children }: AuthRouteProps) {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    return null
  } else {

  }
  return <>{children}</>;



}