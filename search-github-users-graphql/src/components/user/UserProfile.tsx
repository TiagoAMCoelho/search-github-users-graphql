interface Props {
  userName: string;
}

function UserProfile({ userName }: Props) {
  return <h2 className="text-2xl font-bold">{userName}</h2>;
}
export default UserProfile;
