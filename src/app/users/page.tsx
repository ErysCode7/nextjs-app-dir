import { redirect } from "next/navigation";

type Props = {};

const UsersPage = (props: Props) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="page-container">
      <h1>Users Page</h1>
    </div>
  );
};

export default UsersPage;
