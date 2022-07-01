import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import useSWR from 'swr'
import { fetcher } from '@/config'

export default () => {
  const { account, library } = useWeb3React<Web3Provider>()
  return <>
    About
  </>
}
