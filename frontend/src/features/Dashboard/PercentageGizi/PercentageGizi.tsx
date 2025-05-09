import { ChartData } from "chart.js";
import { useEffect, useState } from "react";

import DoughnutChart from "../../../components/DoughnutChart";
import DropdownInput from "../../../components/DropdownInput";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchPercentageGizi } from "../../../redux/slice/report/action";
import { getYearList } from "../../../utils";
import { labelsYears } from "../../../utils/chart";

const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth();

export const PercentageGizi = () => {
  const { data: gizi } = useAppSelector((state) => state.report.percentageGizi);
  const dispatch = useAppDispatch();
  const [year, setYear] = useState(thisYear.toString());
  const [month, setMonth] = useState((thisMonth + 1).toString());

  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Gizi Normal", "Gizi Kurang"],
    datasets: [
      {
        label: "# of Votes",
        data: [gizi?.totalNormal || 0, gizi?.totalNotNormal || 0],
        backgroundColor: ["#00C6A9", "#1E88E5"],
        borderWidth: 4,
      },
    ],
  };

  const yearList = getYearList(2000, thisYear);
  const yearOps = yearList
    .sort((a, b) => b - a)
    .map((item) => ({
      label: item.toString(),
      value: item.toString(),
    }));
  const selectYear = yearOps.filter((item) => item.value === year);

  const monthOps = labelsYears.map((item, index) => ({
    label: item,
    value: (index + 1).toString(),
  }));
  const selectMonth = monthOps.filter((item) => item.value === month);

  useEffect(() => {
    dispatch(fetchPercentageGizi({ year, month }));
  }, [year, month, dispatch]);

  return (
    <DoughnutChart
      data={data}
      title="Persentase Gizi Balita"
      actionComponent={
        <div className="flex items-center gap-1">
          <DropdownInput
            options={yearOps}
            value={selectYear}
            onChange={(newValue) => {
              const ops = newValue as DropdownOption;
              setYear(ops.value);
            }}
          />
          <DropdownInput
            options={monthOps}
            value={selectMonth}
            onChange={(newValue) => {
              const ops = newValue as DropdownOption;
              setMonth(ops.value);
            }}
          />
        </div>
      }
    />
  );
};
