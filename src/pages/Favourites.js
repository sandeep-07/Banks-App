import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../redux/actions/favourites";
function Favourites() {
  const favourites = useSelector((state) => state.favourites.favList);
  const dispatch = useDispatch();
  const handleDel = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="container">
      <h1 className="text-center mb-3 mt-5" style={{ fontFamily: "fantasy" }}>
        <u>Favourites</u>
      </h1>
      {favourites.length !== 0 ? (
        <>
          <table className="table table-striped text-center">
            <thead style={{ backgroundColor: "#242B2E", color: "#fff" }}>
              <tr>
                <th scope="col">Bank</th>
                <th scope="col"></th>
                <th scope="col">IFSC</th>
                <th scope="col">Branch</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {favourites?.map((post) => {
                const str = `/bankdet/${post.ifsc}`;
                return (
                  <tr key={post.ifsc} style={{ cursor: "pointer" }}>
                    <td>{post.bank_name}</td>
                    <td>
                      <button
                        className="btn btn-light"
                        onClick={() => handleDel(post.ifsc)}
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                    <td>{post.ifsc}</td>
                    <td>{post.branch}</td>
                    <td>{post.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center text-center">
            <div>
              <h2 style={{ fontFamily: "fantasy" }} className="m-5">
                No favourite banks added yet
              </h2>
              <Link to="/all-banks">
                {" "}
                <button className="btn btn-primary">Add Now</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Favourites;
