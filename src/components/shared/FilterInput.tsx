import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type PropertyType =
  | "all"
  | "apartment"
  | "house"
  | "villa"
  | "office"
  | "commercial";

const items = [
  { label: "All Properties", value: "all" },
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "Villa", value: "villa" },
  { label: "Office", value: "office" },
  { label: "Commercial", value: "commercial" },
];

interface PropertyTypeFilterProps {
  value: PropertyType;
  onValueChange: (value: PropertyType) => void;
}

const PropertyTypeFilter = ({
  value,
  onValueChange,
}: PropertyTypeFilterProps) => {
  return (
    <Select
      items={items}
      value={value}
      onValueChange={(value) =>
        onValueChange(value as PropertyType)
      }
    >
      <SelectTrigger className="h-11 w-full">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Property Type</SelectLabel>

          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PropertyTypeFilter;