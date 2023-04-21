import * as React from "react";
import { Select } from "@highlight-ui/select";
import { Input } from "@highlight-ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const positions = [
  {
    label: "Agent",
    value: "Agent",
  },
  {
    label: "Orchestrator",
    value: "Orchestrator",
  },
  {
    label: "Technician",
    value: "Technician",
  },
  {
    label: "Engineer",
    value: "Engineer",
  },
  {
    label: "Designer",
    value: "Designer",
  },
  {
    label: "Sales person",
    value: "Sales person",
  },
  {
    label: "Manager",
    value: "Manager",
  },
];

const Filters: React.FunctionComponent = () => {
  const onPositionFilterChange = (position: string) => {
    console.log("position:", position);
  };
  const onSearchChange = (search: string) => {
    console.log("search:", search);
  };

  return (
    <div className="flex items-center justify-between m-8">
      <div className="flex gap-5">
        <Select
          enableFlowTriggers
          closeOnSelect
          options={positions}
          onSelect={([{ value }]) => onPositionFilterChange(String(value))}
          triggerLabel="Position Applied"
          variant="inline"
        />
      </div>
      <Input
        placeholder="Search by name"
        prefix={<MagnifyingGlassIcon className="h-4 w-4" />}
        onChange={({ target: { value } }) => onSearchChange(value)}
      />
    </div>
  );
};

export default Filters;
