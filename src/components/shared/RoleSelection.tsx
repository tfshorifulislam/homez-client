'use client';

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type Role = "buyer" | "seller";

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
                <RadioGroupItem value="seller" id="seller" />
                <Label htmlFor="seller">Seller</Label>
            </div>

            <div className="flex items-center gap-3">
                <RadioGroupItem value="buyer" id="buyer" />
                <Label htmlFor="buyer">Buyer</Label>
            </div>

        </RadioGroup>
    );
}