import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Setup = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Setup;
