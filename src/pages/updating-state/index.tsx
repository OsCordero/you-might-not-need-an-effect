import HomeButton from "@/components/HomeButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-40">
      <HomeButton />
      <div>
        <Tabs defaultValue="example1" orientation="vertical">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="example1">Example 1</TabsTrigger>
            <TabsTrigger value="example2">Example 2</TabsTrigger>
            <TabsTrigger value="example3">Example 3</TabsTrigger>
            <TabsTrigger value="example4">Example 4</TabsTrigger>
            <TabsTrigger value="example5">Example 5</TabsTrigger>
          </TabsList>
          <TabsContent value="example1">
            <Example1 />
          </TabsContent>
          <TabsContent value="example2">
            <Example2 />
          </TabsContent>
          <TabsContent value="example3">
            <Example3 />
          </TabsContent>
          <TabsContent value="example4">
            <Example4 />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Page;
