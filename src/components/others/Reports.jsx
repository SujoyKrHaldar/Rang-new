import Tree from "../designs/common/Tree";

function Reports() {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="container w-full h-full flex items-center justify-start">
          <div className="max-w-lg  py-4">
            <Tree />
            <h1>Annual Reports</h1>
            <p className="mt-4 ">
              Let us take you back to how this actually started. How did we add
              colours to Rang. Our journey started in late 2018 with a few
              young, energetic, and like-minded people who believe in achieving
              the greater good through the Ordinary. You can have a look at our
              projects that we have done over these years.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
