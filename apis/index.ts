// https://random-data-api.com/documentation
import { ofetch, type FetchOptions } from 'ofetch'

const baseURL = 'https://random-data-api.com/api/v2/'

const instance = ofetch.create({
  baseURL,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  onRequestError() {
    throw new Error('伺服器連線異常')
  },
  onResponseError() {}
})

/**
 * 取得用戶名單
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得用戶名單的instance
 */
const getUsers = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('users', Options)
}

/**
 * 取得區域地址
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得區域地址的instance
 */
const getAddress = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('addresses', Options)
}

/**
 * 取得銀行帳號
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得銀行帳號的instance
 */
const getBanks = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('banks', Options)
}

/**
 * 取得設備資訊
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得設備資訊的instance
 */
const getAppliances = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('appliances', Options)
}

/**
 * 取得啤酒資訊
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得啤酒資訊的instance
 */
const getBeers = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('beers', Options)
}

/**
 * 取得血型資訊
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得血型資訊的instance
 */
const getBloodTypes = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('blood_types', Options)
}

/**
 * 取得信用卡資訊
 * @param size - 筆數
 * @param is_xml - 是否為xml
 * @returns 取得信用卡資訊的instance
 */
const getCreditCards = (size = 10, is_xml = false) => {
  const Options: FetchOptions = {
    query: { size, is_xml }
  }
  return instance('credit_cards', Options)
}

export default {
  getUsers,
  getAddress,
  getBanks,
  getAppliances,
  getBeers,
  getBloodTypes,
  getCreditCards
}
