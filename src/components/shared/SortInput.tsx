"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortType = "newest" | "low-high" | "high-low";

interface SortInputProps {
  value: SortType;
  onValueChange: (value: SortType) => void;
}

const items = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
];

const SortInput = ({ value, onValueChange }: SortInputProps) => {
  return (
    <Select
      items={items}
      value={value}
      onValueChange={(value) => onValueChange(value as SortType)}
    >
      <SelectTrigger className="w-full h-11">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>

          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortInput;