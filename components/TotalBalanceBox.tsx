import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts,
  totalBank,
  header,
  totalCurrentBalance = 0,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts}/>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account : {totalBank}</h2>
        <div className="flex flex-col gap-2">
          <p className=" total-balance-lable">Total Current Balance</p>
          <div className="gap-2 flex-center total-balance-amount">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
