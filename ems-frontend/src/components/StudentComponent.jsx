import ButtonLink from "./ButtonLink";
import useStudentComponentHook from "../hooks/useStudentComponentHook";

const StudentComponent = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    categoryId,
    setCategoryId,
    categories,
    saveOrUpdateStudent,
    title,
  } = useStudentComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Back to Directory" toAction="/" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Given Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Given Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Family Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Family Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Contact Email: </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="contact@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Choose Category: </label>
                <select
                  className="form-select"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="">Choose a category</option>
                  {categories.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveOrUpdateStudent}
              >
                Save Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;
