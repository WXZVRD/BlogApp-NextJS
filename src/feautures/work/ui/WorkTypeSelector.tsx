import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
    field: ControllerRenderProps<any, "workData.type">;
};

export default function WorkTypeSelector({ field }: Props) {
    return (
        <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select work type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Work types</SelectLabel>
                    <SelectItem value="book">Books</SelectItem>
                    <SelectItem value="film">Films</SelectItem>
                    <SelectItem value="game">Games</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
