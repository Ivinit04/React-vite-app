import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchApiData } from "../AppService";
import Post from "../DataModel";

const SecondPageComponent: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApiData();
        setData(apiData);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default SecondPageComponent;
