import CalculatorAppPage from "@/components/calculator/CalculatorAppPage";
import CalculatorWebPage from "@/components/calculator/CalculatorWebPage";

export default function CalculatorPage() {
  return (
    <div className="w-full dark:dark:bg-black/40 dark:text-gray-100 ">
      <CalculatorWebPage />
      <CalculatorAppPage />
    </div>
  );
}
