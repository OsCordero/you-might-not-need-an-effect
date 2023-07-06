import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link
      href="/"
      className={cn(buttonVariants({ variant: "ghost" }), "-mt-20 self-start")}
    >
      <ChevronLeft className="mr-2 h-4 w-4" />
      Home
    </Link>
  );
};
export default HomeButton;
