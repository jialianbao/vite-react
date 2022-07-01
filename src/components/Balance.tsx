import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import useSWR from 'swr'
import { fetcher } from '@/config'
import { toWei, fromWei, bignumber} from '@/utils'
export const Balance = () => {
  const { account, library } = useWeb3React<Web3Provider>()
  const { data: balance } = useSWR(['getBalance', account, 'latest'], {
    fetcher: fetcher(library),
  })
  if(!balance) {
    return <div>...</div>
  }
  return <div>Balance: { fromWei(balance.toString()) }</div>
}
