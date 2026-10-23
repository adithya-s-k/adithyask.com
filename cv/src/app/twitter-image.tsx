import OpengraphImage from "./opengraph-image";
import { RESUME_DATA } from "@/data/resume-data";

export const alt = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
