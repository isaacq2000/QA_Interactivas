import { useEffect, useState } from "react";

export const useFetchDuties = () => {

  const [duties, setDuties] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://to-do-app-backend.test/api/duties");
      const duties = await response.json();
      setDuties(duties);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getData()
  }, [])

  return {
    duties
  }
}