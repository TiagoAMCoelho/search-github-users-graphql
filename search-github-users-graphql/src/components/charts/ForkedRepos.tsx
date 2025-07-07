import { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
import { log } from "console";

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  return <div>ForkedRepos</div>;
}
export default ForkedRepos;
