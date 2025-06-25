import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type FormEvent } from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  userName: string;
  //   setUserName: (value: string | ((prev: string) => string)) => void;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ userName, setUserName }: Props) {
  const { toast } = useToast();
  const [text, setText] = useState(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast({
        description: "Please enter a username",
      });

      return;
    }
    setUserName(text);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full mb-8 gap-x-2 lg:w-1/3">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github User..."
        className="flex-grow bg-background"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
export default SearchForm;
