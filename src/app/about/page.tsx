import CardComponent from "@/components/card";
import { USERS } from "@/data/data";

const AboutPage = async () => {
  return (
    <div className="py-10 flex flex-wrap items-center justify-between gap-3 gap-y-10 px-20">
      {USERS?.length > 0 &&
        USERS?.map((user) => {
          return <CardComponent key={user.id} {...user} />;
        })}
    </div>
  );
};

export default AboutPage;
