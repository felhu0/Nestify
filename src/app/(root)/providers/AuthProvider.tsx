"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
} from "firebase/auth";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { auth } from "../../../../firebase.config";

type AuthValues = {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

type AuthContextType = {
  user: FirebaseUser | null;
  authLoaded: boolean;
  register: (values: AuthValues) => Promise<string | void>;
  login: (values: AuthValues) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoaded, setAuthLoaded] = useState<boolean>(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (_user) => {
      if (_user) {
        console.log("User authenticated");

        setUser(_user);
      } else {
        console.log("No user authenticated");
        setUser(null);
      }
      setAuthLoaded(true);
    });

    return () => unsub();
  }, []);

  const register = async (values: AuthValues): Promise<string | void> => {
    const toastId = toast.loading("Creating account...");

    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

      if (!userCredential.user) {
        throw new Error("Something went wrong!. Please try again.");
      }
      console.log(userCredential);

      await updateProfile(userCredential.user, {
        displayName: `${values.firstName} ${values.lastName}`,
      });

      setUser(user);

      toast.success("Account created successfully", { id: toastId });

      return userCredential.user.uid;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        const message = error.message.split("/")[1].replace(/-/g, " ");
        toast.error(message || error.message, { id: toastId });
      } else {
        toast.error("An unknown error occurred", { id: toastId });
      }
    }
  };

  const login = async (values: AuthValues): Promise<void> => {
    const toastId = toast.loading("Signing in...");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (!userCredential.user) {
        throw new Error("Something went wrong!. Please try again.");
      }

      toast.success("Logged in successfully", { id: toastId });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        const message = error.message.split("/")[1].replace(/-/g, " ");
        toast.error(message || error.message, { id: toastId });
      } else {
        toast.error("An unknown error occurred", { id: toastId });
      }
    }
  };

  const value = {
    user,
    authLoaded,
    register,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthContextProvider");
  return context;
};
