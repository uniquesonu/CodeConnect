import React, { useEffect, useState } from "react";
import { MdLogout, MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { account, database, getCurrUser } from "../appwrite/appwriteConfig";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Query } from "appwrite";
import "../App.css";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Drawer({ children }) {
  const [notesTitle, setNotesTitle] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    const promise = account.deleteSession("current");
    promise
      .then(() => {
        navigate("/landing");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const fetchNotesData = async () => {
    try {
      setLoading(true);
      const user = await getCurrUser();
      const promise = database.listDocuments(
        "64a6153ba681e8b32e3d",
        "64a616860b18b3ad068f",
        [Query.equal("owner", user)]
      );
      const res = await promise;
      setNotesTitle(res.documents);
    } catch (error) {
      alert(error);
    } finally {
      setFetchingData(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotesData();
  }, [navigate, fetchingData]);

  // Update theme on component load and when user selects a theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="drawer sticky left-0 lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet context={[setFetchingData]} />
        <label
          htmlFor="my-drawer-2"
          className="absolute top-2 left-2 btn btn-ghost rounded-full drawer-button lg:hidden"
        >
          <MdMenu size={32} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-2 w-80 gap-4 h-screen bg-base-200 text-base-content">
          {/* Create Button */}
          <Link to={"/create"} className="btn btn-primary">
            <FaPlus size={18} />
            <span>Create</span>
          </Link>
          <hr />

          {/* Lists of data */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
            {loading ? (
              <div className="flex self-center">Loading...</div>
            ) : (
              notesTitle.map((title) => (
                <li key={title.$id} className="bg-base-100 rounded-lg">
                  <Link to={"/" + title.$id}>{title.title}</Link>
                </li>
              ))
            )}
          </div>
          <div className="mt-auto">
            <div className="form-control block">
              <label htmlFor="theme" className="block font-bold mb-2">
                Select Theme:
              </label>

              <select
                id="theme"
                className="w-full py-2 px-3 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {capitalizeFirstLetter(theme)}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={logout} className="btn btn-error mt-4 w-full">
              <MdLogout size={24} />
              <span>Logout</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
