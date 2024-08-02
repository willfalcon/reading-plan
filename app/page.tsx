import ReadCard from "../components/ReadCard";
 
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen gap-10">
      <ReadCard testament="OT" />
      <ReadCard testament="NT" />
    </div>
  );
}
