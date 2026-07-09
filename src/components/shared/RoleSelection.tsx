'use client'

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Role = "seeker" | "recruiter";

interface RoleSelectProps {
  value: Role;
  onValueChange: (value: Role) => void;
}

export function RoleSelect({
  value,
  onValueChange,
}: RoleSelectProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => onValueChange(value as Role)}
      className="my-7 flex w-fit gap-6"
    >
      <div className="flex items-center gap-3">
        <RadioGroupItem value="seeker" id="seeker" />
        <Label htmlFor="seeker">Seeker</Label>
      </div>

      <div className="flex items-center gap-3">
        <RadioGroupItem value="recruiter" id="recruiter" />
        <Label htmlFor="recruiter">Recruiter</Label>
      </div>
    </RadioGroup>
  );
}