import HomeButton from "@/components/HomeButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TodoList from "./components/TransformData";
import ContactManager from "./components/ContactManager";
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-40">
      <HomeButton />
      <div>
        <Tabs defaultValue="challenge1" orientation="vertical">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="challenge1">Challenge 1</TabsTrigger>
            <TabsTrigger value="challenge2">Challenge 2</TabsTrigger>
          </TabsList>
          <TabsContent value="challenge1">
            <TodoList />
          </TabsContent>

          <TabsContent value="challenge2">
            <ContactManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Page;
