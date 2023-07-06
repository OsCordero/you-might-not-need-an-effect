import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const users = [
  { id: "1", name: "Pedro Duarte", username: "@peduarte" },
  { id: "2", name: "Jane Doe", username: "@janedoe" },
  { id: "3", name: "John Doe", username: "@johndoe" },
];

const Example3 = () => {
  const [selectedUser, setSelectedUser] = useState(users[0].id);
  return (
    <>
      <h2 className="pb-2 text-xl font-semibold tracking-tight mt-4">
        Resetting all state when a prop changes
      </h2>

      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setSelectedUser(user.id);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <User userId={selectedUser} />
      </div>
    </>
  );
};

const User = ({ userId }: { userId: string }) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fetch(`/api/users/${userId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({ username }),
    // });

    alert(`Saving username ${username} for user ${userId}`);
  };

  // 🔴 Avoid: Resetting state on prop change in an Effect
  // useEffect(() => {
  //   setUsername("");
  // }, [userId]);

  return (
    <form onSubmit={onSubmit} className="ml-4">
      <p>Editing {userId}</p>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Input
            className="col-span-3"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
};

export default Example3;
