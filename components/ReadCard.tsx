import { getRecord } from "@/lib/airtable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { progress } from "@/app/actions";
import ReadCardContent from './ReadCardContent';

type props = {testament: string}

export default async function ReadCard({testament}: props) {
  const res = await getRecord(testament);
  const book = res.fields[`${testament} Book`];
  const range = res.fields[`${testament} Range`];
  const id = res.id

  const progressVerse = progress.bind(null, id).bind(null, testament);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{testament}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={progressVerse}>
          <ReadCardContent book={book} range={range} />
        </form>
      </CardContent>
    </Card>
  ); 
}