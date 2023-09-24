'use client'

import localFont from 'next/font/local'
import Link from "next/link";
import { Button } from "@/components/ui/button"

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { useWeb3Modal } from '@web3modal/react'
 
// Font files can be colocated inside of `pages`
const futura = localFont({ src: '../public/futura_medium.woff' })

const chains = [arbitrum, mainnet, polygon]
const projectId = '7ec060afdbc5366da64212e7809fd4d4'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

export function Header({
  hideFox,
}: {
  hideFox: boolean,
}) {
  const { open, close } = useWeb3Modal();

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <div data-cy='header' className={`${futura.className} flex flex-row gap-2 text-white h-28 items-center my-5 pr-5`}>
          <div className={`${hideFox ? 'hidden' : ''}`}>
            <img className='w-28 h-28' src='./logo.png' />
          </div>
          <div className={`${hideFox ? 'hidden' : ''} text-3xl`}>ConsciousNFT</div>
          <div className='grow'></div>
          <div className='flex flex-row gap-20 text-lg uppercase tracking-widest items-center'>
            <Link href="/project-owners">
              Project Owners
            </Link>
            <Link href="/individual-owner">
              NFT Owners
            </Link>
            <Link href="/playground">
              Playground
            </Link>
            <Button className='uppercase text-lg py-0' variant="outline" onClick={() => open()}>Connect Wallet</Button>
          </div>
        </div>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}