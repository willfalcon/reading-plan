'use client';

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function ReadCardContent({ book, range}: {book: string, range: string}) {
  const { pending } = useFormStatus();
  
  return (
    <>
      {pending ? (
        <Skeleton className="w-56 h-6" />
      ) : (
        <p className="mb-4">
          {book} {range}
        </p>
      )}
      <Button type="submit" disabled={pending}>Done</Button>
    </>
  );

}