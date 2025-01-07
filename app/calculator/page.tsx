import CalculatorAppPage from "@/components/calculator/CalculatorAppPage";
import CalculatorWebPage from "@/components/calculator/CalculatorWebPage";

export default function CalculatorPage() {
  return (
    <div className="w-full dark:dark:bg-gray-500/10 dark:text-gray-100 relative">
      <CalculatorWebPage />
      <CalculatorAppPage />
    </div>
  );
}
