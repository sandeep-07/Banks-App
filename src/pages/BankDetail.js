import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BankDetail() {
  const { id } = useParams();

  const banks = useSelector((state) => state?.banks?.banks);
  const [bankItem, setBankItem] = useState(null);
  const filterBanks = async () => {
    const bank = await banks?.filter((bank) => bank.ifsc === id);
    setBankItem(bank[0]);
  };

  useEffect(() => {
    filterBanks();
  }, []);

  console.log(id);
  return (
    <>
      {bankItem ? (
        <>
          {" "}
          <div style={{ backgroundColor: "#f4f4f4" }}>
            <h1
              style={{ textAlign: "center", fontFamily: "fantasy" }}
              className="p-5"
            >
              <u>Bank Detail</u>
            </h1>
            <div
              className="d-flex justify-content-center vh-100"
              style={{ backgroundColor: "#f4f4f4" }}
            >
              <div
                className="detail-container "
                style={{ marginTop: "2%", height: "40%" }}
              >
                <table class="table border ">
                  <tbody>
                    <tr>
                      <th
                        className="p-3"
                        scope="row"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Bank Name
                      </th>
                      <td className="p-3 " style={{ backgroundColor: "#fff" }}>
                        {bankItem?.bank_name}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className="p-3"
                        scope="row"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Branch
                      </th>
                      <td className="p-3" style={{ backgroundColor: "#fff" }}>
                        {bankItem?.branch}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className="p-3"
                        scope="row"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Branch
                      </th>
                      <td className="p-3" style={{ backgroundColor: "#fff" }}>
                        {bankItem?.branch}
                      </td>
                    </tr>
                    <tr>
                      <th
                        className="p-3"
                        scope="row"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        Address
                      </th>
                      <td className="p-3" style={{ backgroundColor: "#fff" }}>
                        {bankItem?.address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center text-center">
            <div>
              <h2 style={{ fontFamily: "fantasy" }} className="m-5">
                Bank not found with IP:{id}
              </h2>
              <Link to="/all-banks">
                {" "}
                <button className="btn btn-primary">
                  Return to select a bank
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default BankDetail;
