import Tree from "../designs/common/Tree";
import VolunteerForm from "../designs/forms/VolunteerForm";

function VolunteerLinks() {
  return (
    <>
      <div className="w-full h-auto py-16">
        <div className="container w-full h-full flex items-start justify-between gap-4">
          <div className="flex-1 max-w-lg">
            <Tree />
            <h2>
              But not getting <span className="font-bold">a Platform</span>!
            </h2>
            <p className="mt-4 text-xl">
              Join us and add Rang to people's lives and be a volunteer.
            </p>
          </div>
          <div className="flex-1 p-10 bg-[#efefef] max-w-lg -translate-y-[36%]">
            <VolunteerForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerLinks;
