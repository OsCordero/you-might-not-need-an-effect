import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import { buttonVariants } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-xl">You might not need an effect for:</h1>
        <Link href="updating-state" className={buttonVariants()}>
          Updating state based on props or state
        </Link>
        <Link href="events" className={buttonVariants()}>
          Events
        </Link>
        <Link href="chains" className={buttonVariants()}>
          Chains of computations
        </Link>
        <Link href="challenges" className={buttonVariants()}>
          Challenges
        </Link>
      </div>
    </Layout>
  );
}
