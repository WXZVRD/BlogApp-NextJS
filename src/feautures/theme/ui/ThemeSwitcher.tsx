import {Switch, Label} from "@/shared/ui/index";
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme()

    return (
        <div className="flex items-center space-x-2">
            <Switch onClick={() => setTheme(theme == "dark" ? "light" : "dark")} id="airplane-mode"/>
            <Label htmlFor="airplane-mode">Dark Mode</Label>
        </div>
    )
}