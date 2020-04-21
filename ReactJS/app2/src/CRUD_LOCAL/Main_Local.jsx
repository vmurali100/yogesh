import React, { Component } from "react";

export default class Main_Local extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: "", username: "", email: "", password: "" },
      users: [],
      index: null,
      isEdit: false,
    };
  }
  //life cycle hook
  componentWillMount() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users !== null) {
      this.setState({ users });
    } else {
      this.setState({ users: [] });
    }
  }

  handleChange = (e) => {
    let user = this.state.user;
    let name = e.target.name;
    user[name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    console.log(this.state.user);
    let users = this.state.users;
    users.push(this.state.user);
    this.setState({ users });
    localStorage.setItem("users", JSON.stringify(this.state.users));
    this.clearForm();
  };

  clearForm() {
    let user = { id: "", username: "", email: "", password: "" };
    this.setState({ user });
  }

  editUser = (user, index) => {
    this.setState({ user: { ...user }, index, isEdit: true });
  };

  deleteUser = (user, index) => {
    let users = this.state.users.filter((user, i) => {
      return i !== index;
    });
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({ users });
  };

  updateUser = () => {
    let users = this.state.users;
    users[this.state.index] = this.state.user;
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({ users, isEdit: false });
    this.clearForm();
  };
  render() {
    return (
      <div className="container">
        <h2>CRUD Application-Local Storage</h2>
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.user.id}
                  name="id"
                  onChange={(event) => {
                    this.handleChange(event);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.user.username}
                  name="username"
                  onChange={(event) => {
                    this.handleChange(event);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.user.email}
                  name="email"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.user.password}
                  name="password"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>

              {!this.state.isEdit && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              )}
              {this.state.isEdit && (
                <button
                  className="btn btn-primary"
                  onClick={this.updateUser}
                  type="button"
                >
                  Update
                </button>
              )}
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      {/* <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td> */}
                      {Object.values(user).map((val, i) => {
                        return <td key={i}>{val}</td>;
                      })}
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            this.editUser(user, index);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.deleteUser(user, index);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
