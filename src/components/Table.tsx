import * as React from "react";
import { Tag } from "@highlight-ui/tag";
import { Table as DSTable } from "@highlight-ui/table";
import { ApplicationResponse, Status } from "../useApplications";
import { calculateAge } from "../utils";

const STATUS_COLOR: Record<Status, string> = {
  approved: "#e3fcef",
  rejected: "#ffebe6",
  waiting: "#fffae6",
};

type Props = {
  data: ApplicationResponse[];
};
const Table: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <DSTable
      columns={[
        {
          key: "name",
          label: "Name",
        },
        {
          key: "email",
          label: "E-Mail Address",
        },
        {
          key: "birth_date",
          label: "Age",
          renderTd: ({ columnIndex, rowIndex, content }) => (
            <td key={`${columnIndex}-${rowIndex}`}>{calculateAge(content)}</td>
          ),
        },
        {
          key: "position_applied",
          label: "Position Applied",
        },
        {
          key: "application_date",
          label: "Application Date",
        },
        {
          key: "year_of_experience",
          label: "Years of Experience",
        },
        {
          key: "status",
          label: "Status",
          renderTd: ({ columnIndex, rowIndex, content }) => (
            <td key={`${columnIndex}-${rowIndex}`}>
              <Tag
                text={content}
                backgroundColor={STATUS_COLOR[content as Status]}
              />
            </td>
          ),
        },
      ]}
      data={data}
    />
  );
};

export default Table;
