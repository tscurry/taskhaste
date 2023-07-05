import * as React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Tooltip } from "@mui/material";

const CATEGORIES = ["Shopping & Delivery", "Indoor Chores & Personal Assistance", "Landscaping", "Tech Help", "Pet Care"];

const TaskPostingForm = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState(null);
  const [date, setDate] = React.useState("");
  const [cost, setCost] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [completedSteps, setCompletedSteps] = React.useState([1]);

  const nextValid = title.length > 5 && description.length > 10;

  const validForm = () => {
    const validTitle = title.length > 5;

    const validCost = cost > 0 && cost >= 5;
    const validLocation = location !== null;
    const validCategory = selectedCategory !== null;
    const validDescription = description.length > 10;

    return validDescription && validCategory && validCost && validTitle && validLocation;
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center mx-5 mb-10">
      <h1 className="font-bold text-xl lg:text-2xl mt-20 text-center">Let's Get Started With Your Task</h1>
      <p className="mt-6 text-sm text-center">Fill in the details below and find a capable helper for your task.</p>
      <p className="text-sm text-center">Quick, simple and secure. Let's get things done!</p>
      <form action="/task-posting" method="post" className="mt-[120px]" onSubmit={handleFormSubmit}>
        <div className="flex flex-col w-[350px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
          {completedSteps.includes(1) && (
            <>
              <label htmlFor="task-title" className="text-sm mb-2">
                Task Title
              </label>
              <input
                type="text"
                name="task-title"
                id="title"
                className="rounded h-10 p-2 text-sm border-primary border-[1px]"
                required
                onChange={e => setTitle(e.target.value)}
              />
              <label htmlFor="task-description" className="text-sm mb-2 mt-10">
                Task Description
              </label>
              <textarea
                required
                name="task-description"
                id="task-description"
                cols="30"
                rows="5"
                className="p-2 rounded border-primary border-[1px]"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
              <button
                className="my-5 text-sm p-2 rounded bg-primary text-white hover:scale-[102%] transition-transform duration-500 disabled:bg-[#ccc]"
                disabled={!nextValid}
                onClick={() => setCompletedSteps(prevSteps => [...prevSteps, 2])}
              >
                Next
              </button>
              <hr className="w-full border-primary opacity-50 mb-5 mt-2" />
            </>
          )}
          {completedSteps.includes(2) && (
            <div>
              <h2 className="mt-12 mb-5 text-center">{`${selectedCategory === null ? "Select a Category" : "Category Selected"}`}</h2>
              <div className="my-5">
                {CATEGORIES.map((category, index) => {
                  const lastElement = index === CATEGORIES.length - 1;

                  if (selectedCategory && category !== selectedCategory) {
                    return null;
                  }

                  return (
                    <button
                      key={category}
                      type="button"
                      className={`${lastElement ? "border-b-[0.5px] rounded-b" : ""} ${
                        selectedCategory !== null ? "rounded border-[0.5px] hover:bg-white" : "hover:bg-gray-200"
                      } ${
                        index === 0 ? "rounded-t" : ""
                      } block border-primary border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] w-full px-2 py-3 text-sm text-start bg-white`}
                      onClick={() => {
                        setSelectedCategory(selectedCategory === category ? null : category);
                        setCompletedSteps(prevSteps => [...prevSteps, 3]);
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {completedSteps.includes(3) && (
            <>
              <label htmlFor="location" className="flex items-center text-sm mb-2 mt-10">
                Location
                <Tooltip title="Your exact address will be kept private and only shared with the accepted helper for this task" placement="right">
                  <div>
                    <HiOutlineInformationCircle className="ml-2" size={18} />
                  </div>
                </Tooltip>
              </label>
              <input
                required
                type="text"
                name="location"
                id="location"
                className="rounded h-10 p-2 text-sm border-primary border-[1px]"
                onChange={e => setLocation(e.target.value)}
              />

              <div className="flex w-full mt-10 gap-5 sm:gap-8 lg:gap-12">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="task-deadline" className="text-sm mb-2">
                    Task Deadline
                  </label>
                  <input
                    required
                    type="datetime-local"
                    name="task-deadline"
                    id="task-deadline"
                    className="rounded h-10 p-2 text-sm border-primary border-[1px]"
                    onChange={e => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="task-cost" className="text-sm mb-2">
                    Task Cost
                  </label>
                  <input
                    required
                    type="number"
                    name="task-cost"
                    id="task-cost"
                    className="rounded h-10 p-2 text-sm border-primary border-[1px]"
                    onChange={e => setCost(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="photos" className="mt-10 mb-3 text-sm">
                Add Photos (optional)
              </label>
              <input type="file" name="photos" id="photos" accept="image/*" multiple />
              <input
                type="submit"
                value="Post Task"
                className="bg-primary text-white p-2 text-sm rounded disabled:bg-[#ccc] disabled: mt-10 hover:scale-[102%] disabled:transition-none disabled:scale-100 transition-transform duration-500 cursor-pointer"
                disabled={!validForm()}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskPostingForm;
