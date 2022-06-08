import React, {useState} from 'react';
import Tabs from "../components/Tabs/Tabs";

const ContractPage = () => {
  const [activeTab, setActiveTab] = useState(1)


  const toggleActive = (index) => {
    setActiveTab(index)
  }
  return (
    <>
      <div className={'max-w-[1240px] mx-auto  lg:pt-[96px] text-sm text-gray-200 px-4'}>
        <div className={'flex justify-center items-center'}>
          <button
            className={`${activeTab === 1 ? 'border-[#24cd03] shadow-lg shadow-[#24cd03]/50' : 'border-gray-400'} border-2  w-[200px] text-xs sm:text-sm rounded-md font-bold mx-4 my-4 py-3 duration-500 `}
            onClick={() => toggleActive(1)
            }>
            Публичный договор
          </button>
          <button
            className={`${activeTab === 2 ? 'border-[#24cd03] shadow-lg shadow-[#24cd03]/50' : 'border-gray-400'} border-2  w-[200px] text-xs sm:text-sm rounded-md font-bold mx-4 my-4 py-3 duration-500 `}
            onClick={() => toggleActive(2)
            }>
            Договор Way
          </button>
        </div>
        <Tabs activeTab={activeTab}/>
      </div>


    </>
  );
};

export default ContractPage;