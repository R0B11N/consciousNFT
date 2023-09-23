import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndividualOwner() {
  return <>
    <Card>
      <CardHeader>
        <CardTitle className='text-blue-600'>Your NFTs</CardTitle>
        <CardDescription>Choose any to add lore and train</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  </>
}
