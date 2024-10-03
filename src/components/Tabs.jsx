import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the tab parameter from the query params
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "tab-1";

  const [activeTab, setActiveTab] = useState(initialTab);

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`);
  };

  // Effect to update the activeTab when the query param changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [location.search]);

  return (
    <div className="my-44 bg-white">
      <div className="flex justify-center gap-28">
        <button
          onClick={() => handleTabClick("tab-1")}
          className={`text-5xl font-bold ${
            activeTab === "tab-1" ? "text-red-700" : "text-gray-400"
          }`}
        >
          tab-1
        </button>
        <button
          onClick={() => handleTabClick("tab-2")}
          className={`text-5xl font-bold ${
            activeTab === "tab-2" ? "text-red-700" : "text-gray-400"
          }`}
        >
          tab-2
        </button>
        <button
          onClick={() => handleTabClick("tab-3")}
          className={`text-5xl font-bold ${
            activeTab === "tab-3" ? "text-red-700" : "text-gray-400"
          }`}
        >
          tab-3
        </button>
        <button
          onClick={() => handleTabClick("tab-4")}
          className={`text-5xl font-bold ${
            activeTab === "tab-4" ? "text-red-700" : "text-gray-400"
          }`}
        >
          tab-4
        </button>
        <button
          onClick={() => handleTabClick("tab-5")}
          className={`text-5xl font-bold ${
            activeTab === "tab-5" ? "text-red-700" : "text-gray-400"
          }`}
        >
          tab-5
        </button>
      </div>

      <div className="py-11">
        {activeTab === "tab-1" && (
          <p className="text-3xl text-center font-semibold text-black">
            tab1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, iusto?
          </p>
        )}
        {activeTab === "tab-2" && (
          <p className="text-3xl text-center font-semibold text-black">
            tab2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, iusto?
          </p>
        )}
        {activeTab === "tab-3" && (
          <p className="text-3xl text-center font-semibold text-black">
            tab3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, iusto?
          </p>
        )}
        {activeTab === "tab-4" && (
          <p className="text-3xl text-center font-semibold text-black">
            tab4: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, iusto?
          </p>
        )}
        {activeTab === "tab-5" && (
          <p className="text-3xl text-center font-semibold text-black">
            tab5: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, iusto?
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
