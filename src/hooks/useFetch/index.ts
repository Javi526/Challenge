import { ENDPOINT } from "@/config";
import { Article_Interface, Fetch_Data_Success_Interface, Fetch_Data_Error_Interface } from "@/interface/common/article";


export const ApiFetch: () => Promise<Fetch_Data_Success_Interface | Fetch_Data_Error_Interface> = async ()  => {
     try {
         const response = await fetch(ENDPOINT);
         const status = response.status;
         const data: Article_Interface[] = await response.json();
         return {
             data,
             status
         }
     } catch (err) {
         return {
             data: [],
             status: 404
         }
     }
}