import { useQuery } from "@tanstack/react-query";
import mockApplications from "./config/mockApplications.json";

export type Status = "approved" | "rejected" | "waiting";

export type ApplicationResponse = {
  id: number;
  name: string;
  email: string;
  birth_date: string;
  position_applied: string;
  application_date: string;
  year_of_experience: number;
  status: Status;
};

const useApplications = () => {
  return useQuery(["applications"], () =>
    Promise.resolve(mockApplications as ApplicationResponse[])
  );
};

export default useApplications;
