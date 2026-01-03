import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = ({ judul, deskripsi, isi }) => {
  return (
    <>
      <Card className="w-full mt-2">
        <CardHeader>
          <CardTitle>{judul}</CardTitle>
          <CardDescription>{deskripsi}</CardDescription>
        </CardHeader>
        <CardContent>{isi}</CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
