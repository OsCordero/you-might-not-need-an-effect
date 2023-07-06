import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";

const todos = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn TypeScript", completed: false },
  { id: 3, text: "Learn GraphQL", completed: false },
];

const Example2 = () => {
  const [filter, setFilter] = useState<Filter>("all");
  return (
    <>
      <h2 className="pb-2 text-xl font-semibold tracking-tight mt-4">
        Caching expensive calculations{" "}
      </h2>

      <Select
        defaultValue={filter}
        onValueChange={(value) => setFilter(value as Filter)}
      >
        <SelectTrigger className="w-full">
          <SelectValue>Filter</SelectValue>
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="active">Active</SelectItem>
        </SelectContent>
      </Select>
      <TodoList todos={todos} filter={filter} />
    </>
  );
};

const TodoList = ({ todos, filter }: { todos: Todo[]; filter: Filter }) => {
  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Todo</TableHead>
            <TableHead>Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleTodos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.text}</TableCell>
              <TableCell>{todo.completed ? "✅" : "❌"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Example2;

function getFilteredTodos(todos: Todo[], filter: Filter) {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed);
    case "active":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "completed" | "active";
