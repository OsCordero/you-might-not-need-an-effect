import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Example1 = () => {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <>
      <h2 className="pb-2 text-xl font-semibold tracking-tight mt-4">
        Updating state based on props or state
      </h2>

      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-4"
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-4"
      />
      <div> Name: {fullName} </div>
    </>
  );
};
export default Example1;
