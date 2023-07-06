import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`flex flex-col items-center justify-between  ${inter.className}`}
    >
      {children}
    </main>
  );
};
export default Layout;
