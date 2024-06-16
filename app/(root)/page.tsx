import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const LoggedIn = { firstName: "Mohit ", lastName:"Gupta" , email: "mohitgupta8218@gmail.com" };
  return (
    
<section className="home">
      <div className="home-content">
        <header className="home-header">
          
        <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your transaction efficiently. "
            user={LoggedIn?.firstname || "Guest "}
          />

          <TotalBalanceBox
            accounts = {[]} 
            totalBank={1}
            totalCurrentBalance={9867.99}
            total_balance=" total-balance"
            header="gap-2 flex-center total-balance-amount"
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={LoggedIn} 
      transections={[]}
      banks={[{currentBalance:1234.09},{currentBalance:2345.77}]}
      />

    </section>
  )
}

export default Home