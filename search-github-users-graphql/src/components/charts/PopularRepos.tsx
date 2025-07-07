import { type Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";
import { log } from "console";

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  const popularRepos = calculateMostStarredRepos(repositories);

  return <div>PopularRepos</div>;
}
export default PopularRepos;
