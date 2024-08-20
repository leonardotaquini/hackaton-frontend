import { ChartConfig } from "@/components/shadcn/ui/chart";
import { Chart } from "@/components/dashboard/Chart";
import { chartData } from "@/components/dashboard/data/defautl.data";

export const description = "An interactive bar chart";



const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function ChartPage() {
  return (
    <section className="flex justify-center items-center h-full">
      <Chart chartData={chartData} chartConfig={chartConfig} />
    </section>
  );
}
