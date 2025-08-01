'use client';

import Storage from '@/services/storageSupabaseClient';
import InvestmentCard from '@/components/InvestmentCard';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Home() {

  const [investments, setInvestments] = useState([]);
  const [isShowValues, setIsShowValues] = useState(true);
  
  // Hook
  useEffect(
    () => {
      async function load() {
        const data = await Storage.read('investments');

        setInvestments(data);
      }

      load();
    }
    ,[]);

  const handleToggleValues = () => {
    // isShowValues = !isShowValues;
    setIsShowValues(!isShowValues);

    console.log('Toggle Values');
  };

  return (
    <>
      <div className="float-right cursor-pointer" onClick={handleToggleValues}>
        {isShowValues ? (
          <IconEye size={24} />
        ) : (
          <IconEyeOff size={24} />
        )}
      </div>

      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestmentCard
            key={investment.id}
            investment={investment}
            isShowValues={isShowValues}
            setInvestments={setInvestments}
          />
        ))}
      </div>
    </>
  );
}
