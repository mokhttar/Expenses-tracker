"use client";

import DashboardIcon from "/public/assets/Dashboardicon.svg";
import tracnsactionsIcon from "/public/assets/transactions.svg";
import AiHelperIcon from "/public/assets/Analytics.svg";
import NotificationIcon from "/public/assets/Notification.svg";
import BankAccountsIcon from "/public/assets/Bank.svg";
import SettingIcon from "/public/assets/Settings.svg";
import LogoutIcon from "/public/assets/Logout.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NavBare() {
  const router = useRouter();
  function handleRoutes(path: string) {
    router.push(path);
  }

  return (
    <div className="h-screen fixed  flex    px-10  shadow-lg  flex-col   ">
      {/* Title */}
      <div className="flex items-center   text-center px-5 py-10">
        <h1 className="text-xl text-center font-semibold text-green-500">
          PennyPilot
        </h1>
      </div> 

      <div className="flex flex-col  gap-10     cursor-pointer  mt-10  px-1 justify-center ">
        <div
          className="flex items-center  hover:bg-green-600 hover:text-white hover:px-8 hover:rounded-full hover:py-2  hover:font-semibold hover:scale-95  hover:transition-transform hover:duration-1000    gap-3 "
          onClick={() => handleRoutes("/Dashboard")}
        >
          <Image src={DashboardIcon} alt="dashboard-icon" width={22} />
          <p className="hover:animate-pulse">Dashboard</p>
        </div>
        <div
          className="flex   hover:bg-green-600 hover:text-white hover:px-8 hover:rounded-full hover:py-2  hover:font-semibold hover:scale-95  hover:transition-transform hover:duration-1000  gap-2"
          onClick={() => handleRoutes("/transactions")}
        >
          <Image src={tracnsactionsIcon} alt="transactions-icon" width={22} />
          <p>Transactions</p>
        </div>
        <div className="flex   hover:bg-green-600 hover:text-white hover:px-8 hover:rounded-full hover:py-2  hover:font-semibold hover:scale-95  hover:transition-transform hover:duration-1000  items-center  gap-2">
          <Image src={AiHelperIcon} alt="aiHelper-icon" width={22} />
          <p>Ai Helper</p>
        </div>
        <div className="flex    hover:bg-green-600 hover:text-white hover:px-8 hover:rounded-full hover:py-2  hover:font-semibold hover:scale-95  hover:transition-transform hover:duration-1000  items-center  gap-2">
          <Image src={BankAccountsIcon} alt="aiHelper-icon" width={24} />
          <p>Bank Accounts</p>
        </div>
        <div className="flex  hover:bg-green-600 hover:text-white hover:px-8 hover:rounded-full hover:py-2  hover:font-semibold hover:scale-95  hover:transition-transform hover:duration-1000    items-center  gap-2">
          <Image
            src={NotificationIcon}
            alt="aiHelper-icon"
            width={21}
            className=""
          />
          <p>Notification</p>
        </div>
      </div>

      {/* Settings -logout options */}
      <div className=" absolute   bottom-6">
        <div className="flex flex-col  px-1 gap-3   ">
          <div className="flex gap-1">
            <Image src={SettingIcon} width={22} alt="setting-icon" />
            <p>Settings</p>
          </div>
          <div className="flex gap-1">
            <Image src={LogoutIcon} alt="logout-icon" width={22} />
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBare;
