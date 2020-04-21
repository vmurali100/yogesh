import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: "", username: "", email: "", password: "" },
      users: [
        {
          id: 7523,
          email: "GDonaldson@aenean.io",
          username: "Murali",
          password: "PMnv3",
        },
        {
          id: 7524,
          email: "GCulaciati@egestas.ly",
          username: "NIsham",
          password: "rskGn",
        },
        {
          id: 7525,
          email: "MRoth@molestie.io",
          username: "SNimon",
          password: "M18ir",
        },
        {
          id: 7526,
          email: "BBozzalla@molestie.io",
          username: "GPatterson",
          password: "H4Tkx",
        },
        {
          id: 7527,
          email: "FLenz@pretium.io",
          username: "ELevy",
          password: "nYk0h",
        },
      ],
    };
  }
  editUser = (user) => {
    this.setState({ user });
  };
  deleteUser = (user, index) => {
    // let users = this.state.users.filter((obj) => {
    //   return user.id !== obj.id;
    // });
    // this.setState({ users });

    this.state.users.splice(index, 1);
    this.setState({ users: this.state.users });
  };

  handleChange = (e) => {
    let user = this.state.user;
    let name = e.target.name;
    user[name] = e.target.value;
    this.setState({ user });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
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
                            this.editUser(user);
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

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
