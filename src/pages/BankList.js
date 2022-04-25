import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import setBanks, { setCityName } from "../redux/actions/bank";
import Pagination from "../utils/Pagination";
import Banks from "../components/Banks";
import { toast } from "react-toastify";

function BankList() {
  const dispatch = useDispatch();
  const banks = useSelector((state) => state.banks.banks);

  const [currentPage, setCurrentPage] = useState(1);
  const [banksPerPage, setBanksPerPage] = useState(10);
  const tempCity = useSelector((state) => state.banks.city);
  const [city, setCity] = useState(tempCity ? tempCity : "LUCKNOW");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [localBanks, setLocalBanks] = useState([]);
  const options = ["Select City", "LUCKNOW","MUMBAI",  "GOA", "DELHI", "ALLAHABAD"];
  const [query, setQuery] = useState("");
  const categoryOptions = ["Select Category", "IFSC", "Branch", "Bank-Name"];

  const handleCityChange = (e) => {
    setCity(e.target.value);
    dispatch(setCityName(e.target.value));
    fetchBanks(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const indexOfLastBank = currentPage * banksPerPage;
  const indexOfFirstBank = indexOfLastBank - banksPerPage;
  const currentBanks = localBanks?.slice(indexOfFirstBank, indexOfLastBank);

  const fetchBanks = async (cityName) => {
    setLoading(true);
    const res = await axios.get(
      `https://vast-shore-74260.herokuapp.com/banks?city=${
        cityName ? cityName : city
      }`
    ).catch((e)=>{
      toast.error("Something went wrong")
    });
    console.log(res)
    if(res.data.length===0)
    toast.error("Not found")
    dispatch(setBanks(res.data));
    setLocalBanks(res.data);
    setLoading(false);
  };

  if (!useSelector((state) => state.banks.city))
    dispatch(setCityName("LUCKNOW"));
  useEffect(() => {
    if (!banks || banks.length === 0) fetchBanks();
    else setLocalBanks(banks);
  }, []);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    if (query && query.length !== 0) {
      filterBank();
    }
  }, [query, category, city, banks]);

  const filterBank = () => {
    let tempBanks = [];
    if (category === "IFSC")
      tempBanks = banks?.filter((bank) => bank.ifsc.startsWith(query.toUpperCase()));
    else if (category === "Branch")
      tempBanks = banks?.filter((bank) =>
        bank.branch.includes(query.toUpperCase())
      );
    else if (category === "Bank-Name")
      tempBanks = banks?.filter((bank) =>
        bank.bank_name.includes(query.toUpperCase())
      );
    else tempBanks = banks;

    setLocalBanks(tempBanks);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-3 mt-5" style={{ fontFamily: "fantasy" }}>
          <u>All Banks</u>
        </h1>

        <div style={{ float: "right", display: "flex" }} className="mb-4 ">
          <div className="m-2">
            <select
              value={city}
              onChange={handleCityChange}
              className="form-select"
              aria-label="Default select example"
            >
              {options.map((item, idx) => (
                <option
                  value={item}
                  key={idx}
                  style={idx == 0 ? { display: "none" } : {}}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="m-2">
            <select
              value={category}
              className="form-select "
              onChange={handleCategoryChange}
            >
              {categoryOptions.map((item, idx) => (
                <option
                  value={item}
                  key={idx}
                  style={idx == 0 ? { display: "none" } : {}}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="m-2">
            <input
              onChange={handleQueryChange}
              className="p-1"
              placeholder="Enter value"
            />
          </div>
        </div>

        <div style={{ backgroundColor: "#fff" }}>
          <Banks banks={currentBanks} loading={loading} />
        </div>

        <Pagination
          banksPerPage={banksPerPage}
          totalBanks={localBanks?.length}
          handlePageChange={handlePageChange}
        />
        <div style={{ float: "right" }} className="d-flex align-items-center ">
          <p className="small mt-2">(Number of rows per page)</p>
          <input
            maxLength="4"
            size="4"
            onChange={(e) =>
              setBanksPerPage(
                e.target.value !== null && e.target.value.length !== 0
                  ? e.target.value
                  : 10
              )
            }
          />
        </div>
      </div>
    </>
  );
}

export default BankList;
