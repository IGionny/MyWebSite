import {ref} from "vue";

const section = ref("Summary");
export default function useSectionSelection() {
    return section;
}