import {useRouter} from "next/navigation";


export function useRoute() {
    const router = useRouter();

    function goTo(pathToGo: string) {
        router.push(pathToGo, { scroll: false})
    }

    return goTo
}
