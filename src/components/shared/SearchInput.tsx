import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "../ui/field";

interface PropertySearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

const SearchInput = ({
  value,
  onChange,
  onSearch,
}: PropertySearchProps) => {
  return (
    <Field orientation="horizontal" className="w-full">
      <Input
        type="search"
        placeholder="Search by location or property..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11"
      />

      <Button
        className="h-11 bg-blue-600"
        onClick={onSearch}
      >
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </Field>
  );
};

export default SearchInput;