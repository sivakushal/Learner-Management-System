import ButtonLink from "./ButtonLink";
import useDepartmentComponentHook from "../hooks/useDepartmentComponentHook";

const DepartmentComponent = () => {
  const {
    categoryName,
    setCategoryName,
    categoryDescription,
    setCategoryDescription,
    title,
    saveOrUpdateDepartment,
  } = useDepartmentComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/departments" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Category Name: </label>
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  className="form-control"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Category Description: </label>
                <input
                  type="text"
                  name="categoryDescription"
                  placeholder="Enter Category Description"
                  className="form-control"
                  value={categoryDescription}
                  onChange={(e) => setCategoryDescription(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveOrUpdateDepartment}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
