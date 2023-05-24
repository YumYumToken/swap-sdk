import { SupportedChainId } from '@yumyumswap/sdk-core'

export const FACTORY_ADDRESS = '0xB79E08735DDE71B58A489d7f1e8CF7f97402c5e0'
export const FACTORY_ADDRESSES: { [chainId in SupportedChainId]: string } = {
  [SupportedChainId.BASE_GOERLI]: '0xB79E08735DDE71B58A489d7f1e8CF7f97402c5e0',
  [SupportedChainId.PULSE]: '0x06393b72873077c523ed10B3Db69087875AF61ef',
  [SupportedChainId.MAINNET]: FACTORY_ADDRESS,
  [SupportedChainId.GOERLI]: FACTORY_ADDRESS,
  [SupportedChainId.ARBITRUM_ONE]: FACTORY_ADDRESS,
  [SupportedChainId.ARBITRUM_GOERLI]: FACTORY_ADDRESS,
  [SupportedChainId.OPTIMISM]: FACTORY_ADDRESS,
  [SupportedChainId.OPTIMISM_GOERLI]: FACTORY_ADDRESS,
  [SupportedChainId.POLYGON]: FACTORY_ADDRESS,
  [SupportedChainId.POLYGON_MUMBAI]: FACTORY_ADDRESS,
  [SupportedChainId.CELO]: FACTORY_ADDRESS,
  [SupportedChainId.CELO_ALFAJORES]: FACTORY_ADDRESS,
  [SupportedChainId.BNB]: FACTORY_ADDRESS
}

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x5f77a2e6e9e09fd14bae12229869da91c1843cfd43d8bda95b61c67b0d149373'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
