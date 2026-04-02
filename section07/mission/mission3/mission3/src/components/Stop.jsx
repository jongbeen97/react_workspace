import { useEffect } from "react";

const Stop = () => {
  useEffect(() => {
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>정지</div>;
};

export default Stop;
