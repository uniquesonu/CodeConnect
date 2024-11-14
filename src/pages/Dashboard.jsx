import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import LoadingData from "../components/Loading";

function Dashboard() {
  const [name, setName] = useState("User");
  const [loading, setLoading] = useState(true); // Introduce the loading state
  const navigate = useNavigate();

  useEffect(() => {
    const user = account.get();
    user
      .then((res) => {
        setName(res.name);
        setLoading(false); // Set loading to false when the name is fetched
      })
      .catch(() => {
        navigate("/landing");
      });
  }, [navigate]);

  if (loading) {
    // Return a loading indicator while the name is being fetched
    return <LoadingData />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-primary-content text-center gap-4 p-4">
      <FaLaptopCode size={108} className="mx-auto" />
      <h1 className="mb-5 text-5xl font-bold">Hello, {name}👋🏻</h1>
      <p>Start by creating/opening a new ShareScribe.</p>
    </div>
  );
}

export default Dashboard;
