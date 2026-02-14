import React from "react";
import { useSession  } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "@/components/common/Loader";

type Props = {children: React.ReactNode;};

const Privateroute = ({ children }: Props) => {
  const { session } = useSession();

  if (session === undefined) {
    return <Loader />;
  }

  return <div>{session ? <>{children}</> : <Navigate to="/signup" />}</div>;
};

export default Privateroute;

// redundant component since Authprotectedroute is already handling private routing