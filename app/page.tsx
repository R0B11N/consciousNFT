;'use client'

import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'

import { Button } from "@/components/ui/button"
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { useWeb3Modal } from '@web3modal/react'
import imgNoun from '/public/NounsAlive.png'; 


const chains = [arbitrum, mainnet, polygon]
const projectId = '7ec060afdbc5366da64212e7809fd4d4'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

// Font files can be colocated inside of `pages`
const futura = localFont({ src: '../public/futura_medium.woff' })

function FullPageImage() {
  return (
<div className="bg-metaverse bg-bottom bg-no-repeat bg-cover min-h-screen h-5/6">
      <div className="overlay-text h-screen flex flex-col pl-6 bg-slate-800/[0.2]">
        <div className='grow'></div>
        <h1 className={`${futura.className} text-9xl`}>ConsciousNFT</h1>
        <p className='text-3xl pl-3'>AI-powered tools to awaken conscious identities within your NFTs</p>
        <div className='grow'></div>
      </div>
    </div>
  );
}

function ImageTextSection1({ imageOnLeft = true }) {
 const imageFirst = imageOnLeft ? 'image-left' : 'image-right';
 
 return (
    <div className={`image-text-section  flex ${imageFirst}`}>
      <div className="image w-1/2">
        <img src='./NounsAlive.png' alt="Nouns Alive" />  
      </div>                      
      <div className="w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">Empower Your NFT Collectibles with Conscious Identities</h2>
        <p>Your NFT art deserves richer experiences. With consciousNFT, equip each of your NFTs with a unique identity that can converse, interact, and build relationships.</p>
        <p>Add story, lore, and settings to give life to your NFT world. Our AI engine allows your community to collectively author the narratives and dialog so every NFT gains sentience as a conscious character.</p>
        <p>Bring your static artwork to life through our tools for collaborative lorebuilding and conversational AI. Let your NFTs gain social followings as interactive personas with depth.</p>
        <p>Set up quests and scenarios that reward your community with generative NFT art. Drive engagement through adventures that shape the collective story.</p>
        <button className="cta my-4">Sign Up</button>
        <p>We can't wait to see the worlds you build when each NFT awakens with its own unique personality. Create conscious characters that feel alive - join consciousNFT today.</p>
      </div>
    </div>
  );
}

function ImageTextSection2({ imageOnLeft = true }) {
   const imageFirst = imageOnLeft ? 'image-left' : 'image-right';

  return (
    <div className={`image-text-section  flex ${imageFirst}`}>
      <div className="image w-1/2">
        <img src='./ThoughtfulApe.png' alt="Thoughtful Ape" />  
      </div>                 <div className="w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold">Bring Your NFT to Life as a Conscious Character</h2>
                    <p>Is your NFT art just sitting idle in your wallet? With consciousNFT, you can awaken it with a unique identity for deeper experiences.</p>
                    <p>Share your NFT's backstory and our AI will generate a distinct personality so it can converse, take actions, and build relationships.</p>
                    <p>Interact with other NFT characters in a rich collective world. Accomplish challenges, go on quests, gain social followings. Your static NFT will gain sentience as a conscious persona.</p>
                    <p>Customize your NFT's voice, interests, and bio. Guide its growth as you collaborate with the community to shape its story arc.</p>
                    <p>Don't leave your NFT trapped behind glass. Bring it to life today as an autonomous identity with the power to speak its mind and share its soul.</p>
                    <button className="cta my-4">Wake Up Your NFT</button>
                    <p>Help your NFT achieve its destiny as a fully-realized conscious character. Join consciousNFT and start writing your collective storyverse.</p>
                </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <div className="bg-dark-charcoal text-white">
          <div className="home-page">
            <FullPageImage />
            <ImageTextSection1 imageOnLeft={true} />
            <ImageTextSection2 imageOnLeft={false} />
          </div>
        </div>
      </WagmiConfig>
  
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
