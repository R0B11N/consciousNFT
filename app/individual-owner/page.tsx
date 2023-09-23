'use client'

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndividualOwner() {
  // Obtain through WalletConnect/Rainbow.
  const address = '0x2666f0C8FB58d182f2Dd79475DCA4A07B3724607';

  const [nfts, setNfts] = useState([]);
  console.log('nfts:', nfts);

  useEffect(() => {
    const fetchNfts = async () => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address
        })
      };

      const response = await fetch('http://localhost:3000/api/fetch-nfts', options);

      const json = await response.json();

      const fetchedNfts = json.nfts;

      setNfts(fetchedNfts);
    }

    fetchNfts();
  }, [address, setNfts]);

  return <>
    <div className='container'>
      <h2>Wallet address: {address}</h2>
      {
        nfts.map(({ imageUrl }, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='text-blue-600'>Your NFTs</CardTitle>
                <CardDescription>Choose any NFT to add lore and train</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={imageUrl} />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          );
        })
      }
    </div>
  </>
}
