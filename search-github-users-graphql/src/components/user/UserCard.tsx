import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full mb-8 lg:w-1/2">
      <CardHeader className="flex-row items-center gap-x-8">
        <img
          src={avatarUrl}
          alt={name}
          className="object-cover rounded w-36 h-36"
        />
        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || "Coding Addict"}</CardTitle>
          <CardDescription>
            {bio || "Passionate about coding and technology."}
          </CardDescription>
          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
export default UserCard;
