import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonalMarshal } from "@/images";

export default function IntroductionCard() {
  return (
    <Card className="w-[600px] px-5">
      <CardHeader></CardHeader>
      <CardContent className="flex">
        <Avatar className="rounded-sm h-72 w-52">
          <AvatarImage
            src={PersonalMarshal.src}
            className="aspect-auto object-cover"
          />
          <AvatarFallback>Marshal</AvatarFallback>
        </Avatar>
        <div>
          <CardHeader className="font-bold text-xl pt-0">
            Yeah, I look young...
          </CardHeader>
          <CardContent>
            <p>This is me when I going into the real world for a year.</p>
            <span>Too go to be true...</span>
          </CardContent>
        </div>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
