import { getPayload } from "payload";
import config from "@payload-config";

const payloadAPI = await getPayload({config})

export default payloadAPI