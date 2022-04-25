import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import addToFav, { remove } from "../redux/actions/favourites";

function Banks({ banks, loading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFav = (e, post) => {
    e.stopPropagation();
    dispatch(addToFav(post));
  };

  const favString = useSelector((state) => state?.favourites?.favString);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleDel = (e,id) => {
    e.stopPropagation();
    dispatch(remove(id));
  };
  return (
    <div>
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
          {banks?.map((post) => {
            const str = `/bankdet/${post.ifsc}`;
            return (
              <tr
                key={post.ifsc}
                onClick={() => navigate(str)}
                style={{ cursor: "pointer" }}
              >
                <td>{post.bank_name}</td>
                {favString?.includes(post.ifsc) ? (
                  <>
                    <td onClick={(e) => handleFav({ e, post })}>
                    <button
                        className="btn btn-light"
                        onClick={(e) => handleDel(e,post.ifsc)}
                      >
                       <i class="fa-solid fa-check"></i>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td onClick={(e) => handleFav({ e, post })}>
                      <button
                        className="btn btn-light"
                        onClick={(e) => handleFav(e, post)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </td>
                  </>
                )}

                <td>{post.ifsc}</td>
                <td>{post.branch}</td>
                <td>{post.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Banks;
