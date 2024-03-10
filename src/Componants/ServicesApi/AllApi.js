import { Server_Api } from "./ServerApi";
import commonApi from "../ServicesApi/CommonApi" 

export const uploadImageApi = async (image)=>{
    return await commonApi("POST",`${Server_Api}/Gallery`,image)
}

export const getImageApi = async ()=>{
    return await commonApi("GET",`${Server_Api}/Gallery`,"")

}
export const uploadenquiryApi = async (enquiry)=>{
    try{return await commonApi("POST",`${Server_Api}/Enquiry`,enquiry)}
catch{
    console.error("Error uploading enquiry:", error)
}}

    export const getEnquiryApi = async ()=>{
        return await commonApi("GET",`${Server_Api}/Enquiry`,"")}
    