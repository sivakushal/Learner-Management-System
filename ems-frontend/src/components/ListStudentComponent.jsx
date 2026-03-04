import ButtonLink from "./ButtonLink";
import useListStudentComponentHook from "../hooks/useListStudentComponentHook";

const ListStudentComponent = () => {
  const { students, getCategoryName, updateStudent, deleteStudentById } =
    useListStudentComponentHook();

  return (
    <div className="container">
      <h2 className="text-center my-3">Learner Directory</h2>
      <ButtonLink text="New Profile" toAction="/add-student" />
      <div className="row">
        {students.map((item) => {
          return (
            <div className="col-md-4 mb-3" key={item.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.firstName} {item.lastName}
                  </h5>
                  <p className="card-text">
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {getCategoryName(item.categoryId)}
                  </p>
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => updateStudent(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudentById(item.id)}
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

export default ListStudentComponent;
