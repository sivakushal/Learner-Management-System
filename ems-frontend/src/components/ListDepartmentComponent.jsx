import ButtonLink from "./ButtonLink";
import useListDepartmentComponentHook from "../hooks/useListDepartmentComponentHook";

const ListDepartmentComponent = () => {
  const { departments, updateDepartment, removeDepartment } =
    useListDepartmentComponentHook();

  return (
    <div className="container">
      <h2 className="text-center py-3">Category Directory</h2>
      <ButtonLink text="New Category" toAction="/add-department" />
      <div className="row">
        {departments.map((item) => {
          return (
            <div className="col-md-4 mb-3" key={item.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.categoryName}</h5>
                  <p className="card-text">{item.categoryDescription}</p>
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => updateDepartment(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeDepartment(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListDepartmentComponent;
