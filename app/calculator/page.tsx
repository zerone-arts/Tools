import CalculatorAppPage from "@/components/calculator/CalculatorAppPage";
import CalculatorWebPage from "@/components/calculator/CalculatorWebPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator",
};

export default function CalculatorPage() {
  return (
    <div className="w-full h-screen dark:bg-gray-500/10 dark:text-gray-100 relative max-lg:absolute flex items-center justify-center">
      <CalculatorWebPage />
      <CalculatorAppPage />
    </div>
  );
}
