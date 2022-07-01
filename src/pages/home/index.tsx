import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Balance } from '@/components/Balance'

export default () => {
  const { chainId, account, activate, active, library } = useWeb3React<Web3Provider>()
  return <>
    Home
    <div className=''>
      <div>
        account: {account}
      </div>
      <div>
        chainId: {chainId}
      </div>
      <div>
        active: { active ? 'true' : 'false' }
      </div>
      <div>
        balance: 
        <Balance />
      </div>
    </div>
  </>
}
