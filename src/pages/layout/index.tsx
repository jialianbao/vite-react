import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Link } from "react-router-dom";
import { Networks,chainName } from '@/config'
import { fromWei, shorterAddress } from '@/utils';

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [...Networks],
})

export default () => {
  const { chainId, account, activate, deactivate, active, library } = useWeb3React<Web3Provider>()
  const [balance,setBalance]= useState<any>(0);

  const onClick = () => {
    activate(injectedConnector)
  }
  const Disconnect = () => {
    deactivate()
  }
  useEffect(() => {
    if (active) {
      library?.getBalance(`${account}`).then((result: any)=>{
        setBalance(fromWei(result.toString()))
      })
    }
  }, [ active, account ])
  
  return <>
    <nav className='flex justify-between items-center h-14 bg-yellow-50'>
      <ul className='flex items-center'>  
        <li className='mx-5 cursor-pointer'>
          <Link className='text-teal-600 hover:text-teal-500' to="/">Home</Link>
        </li>
        <li className='mx-5 cursor-pointer'>
          <Link className='text-teal-600 hover:text-teal-500' to="/about">About</Link>
        </li>
      </ul>
      <ul className='flex item-center'>
        <li className='mx-5 flex items-center'>
          balance: { balance }
        </li>
        <li className='mx-5 flex items-center'>
          account: { shorterAddress(account) }
        </li>
        <li className='mx-5 flex items-center'>
          chainId: { chainName[`${chainId}`] }
        </li>
        {active ? <>
          <li className='mx-5 cursor-pointer bg-teal-500 text-white h-9 px-3 rounded flex justify-center items-center' onClick={Disconnect}>
            Disconnect
          </li>
        </>:<>
          <li className='mx-5 cursor-pointer bg-teal-500 text-white h-9 px-3 rounded flex justify-center items-center' onClick={onClick}>
            Contract wallet
          </li>
        </>}
      </ul>
    </nav>
  </>
}
