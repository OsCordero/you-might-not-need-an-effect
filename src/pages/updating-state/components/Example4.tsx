import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const initItems = [
  { id: "1", name: "item1", tags: ["tag1", "tag2"], description: "desc1" },
  { id: "2", name: "item2", tags: ["tag1", "tag2"], description: "desc2" },
  { id: "3", name: "item3", tags: ["tag1", "tag2"], description: "desc3" },
  { id: "4", name: "item4", tags: ["tag1", "tag2"], description: "desc4" },
];

const newItems = [
  { id: "5", name: "item5", tags: ["tag1", "tag2"], description: "desc5" },
  { id: "6", name: "item6", tags: ["tag1", "tag2"], description: "desc6" },
  { id: "7", name: "item7", tags: ["tag1", "tag2"], description: "desc7" },
  { id: "8", name: "item8", tags: ["tag1", "tag2"], description: "desc8" },
];

const Example4 = () => {
  const [items, setItems] = useState(initItems);
  return (
    <div>
      <Button
        onClick={() => {
          setItems(items === initItems ? newItems : initItems);
        }}
      >
        Change items
      </Button>

      <List items={items} />
    </div>
  );
};

function List({ items }: { items: Item[] }) {
  const [selection, setSelection] = useState<Item | null>(null);

  //   // 🔴 Avoid: Adjusting state on prop change in an Effect
  //   useEffect(() => {
  //     setSelection(null);
  //   }, [items]);
  return (
    <div>
      <div>
        {selection && (
          <>
            <div>selected item: {selection.name}</div>
            <div>description: {selection.description}</div>
            <div>tags: {selection.tags}</div>
          </>
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tags}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setSelection(item);
                  }}
                >
                  Select
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </div>
  );
}

export default Example4;

type Item = {
  id: string;
  name: string;
  tags: string[];
  description: string;
};
