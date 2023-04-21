import { Typography } from "@highlight-ui/typography";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const PageLink: React.FunctionComponent<{
  page?: number;
  isActive?: boolean;
}> = ({ children, page, isActive = false }) => {
  return (
    <a
      href={`?page=${page}`}
      className={["p-2", isActive && "border-b-2 border-black"]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </a>
  );
};

const Pagination: React.FunctionComponent = () => {
  return (
    <div className="flex justify-between px-8 py-4">
      <Typography color="text-subdued" className="p-2">
        Showing 1 to 10 of 97 results
      </Typography>

      <Typography color="text-subdued" className="flex" component="div">
        <PageLink page={1}>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </PageLink>

        <PageLink page={1} isActive>
          1
        </PageLink>
        <PageLink page={1}>2</PageLink>
        <PageLink page={1}>3</PageLink>

        <PageLink page={1}>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </PageLink>
      </Typography>
    </div>
  );
};

export default Pagination;
