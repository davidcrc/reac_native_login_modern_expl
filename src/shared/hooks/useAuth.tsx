import { useEffect, useState } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '@/service/firebase';

const useAuth = () => {
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }

      return unsub;
    });
  }, []);

  return user;
};

export default useAuth;
