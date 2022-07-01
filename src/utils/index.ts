import BigNumber from 'bignumber.js';

export function bignumber (number: any){
  return new BigNumber(number)
}

export function toWei(number: string | number) {
  return new BigNumber(number).multipliedBy(new BigNumber(10).pow(18)).toString()
}

export function fromWei(value: string | number) {
  return new BigNumber(value).shiftedBy(-18).toString()
}

export function fromRay(value: string | number) {
  return new BigNumber(value).shiftedBy(-27)
}

export function fromRad(value: string | number) {
  return new BigNumber(value).shiftedBy(-45)
}

export function fromDecimals(value: string | number, decimals = 18) {
  return new BigNumber(value).shiftedBy(-decimals)
}

export function delay(ms: number | undefined) {
  return new Promise(resolve=>setTimeout(resolve,ms))
}

export function shorterAddress(value: string | null | undefined){
  if (value) {
    return value.slice(0,6) + '****' + value.slice(-4,)
  }
  return value
}


/**
 * @description sessionStory 本地存储
 */
 export function getSessionStorage (name: string) {
  return sessionStorage.getItem(name)
}
/**
 * @description sessionStory 获取本地存储信息
 */
export function setSessionStorage (name: string, value: string) {
  return sessionStorage.setItem(name, value)
}
/**
 * @description clear session 清除本地信息
 */
export function clearSessionStorage () {
  sessionStorage.clear()
}


