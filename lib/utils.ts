import { Pending } from "@/types/pending";
import axios from "axios";
import { PasbyInfo } from "../types/datainfo";
import { CreatePasby } from "@/types/createPasby";

export const fetchPending = async () => {
  const res = await axios.get(
    "http://localhost:8080/https://frontend-api.web.app/admin/request/pending",
    {
      headers: {
        "x-requested-with": `_zR3gphdUKi,ID+qVYp549+Q7eZBU`,
        "Content-Type": " application/json ",
        Accept: "*/*",
      },
    }
  );
  const data: Pending = await res.data;

  console.log(data);
  return data;
};

export const convertImage = ({ data }: { data: string }) => {
  const base64String = `data:image/jpeg;base64,${data}`;

  // Function to convert Base64 to Blob
  function base64ToBlob(base64: string, mime: string) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
  }

  // Convert Base64 string to Blob
  const imageBlob = base64ToBlob(base64String, "image/jpeg");

  // Create a URL for the Blob
  const imageUrl = URL.createObjectURL(imageBlob);

  return imageUrl;
};

export const postPasby = async ({ body }: { body: PasbyInfo }) => {
  const res = await axios.post(
    "http://localhost:8080/https://frontend-api.web.app/admin/request/pending",
    {
      headers: {
        "x-requested-with": `_zR3gphdUKi,ID+qVYp549+Q7eZBU`,
        "Content-Type": " application/json ",
        Accept: "*/*",
      },
      data: {
        nin: body.nin,
        naming: {
          title: body.source.data.gender == "m" ? "Mr." : "Mrs.",
          fullname: body.source.extra.name,
        },
        ninInfo: {
          marital_status: body.source.data.marital_status,
          gender: body.source.data.gender,
          date_of_birth: body.source.data.date_of_birth,
          last_name: body.source.data.last_name,
          photo: body.source.data.photo,
          phone_number: body.source.data.phone_number,
          employment_status: body.source.data.employment_status,
          middle_name: body.source.data.middle_name,
          first_name: body.source.data.first_name,
          email: body.source.data.email,
        },
        bio: {
          birthplace: body.source.extra.birth.place,
          birthstate: body.source.extra.birth.state,
          maritalStatus: body.source.data.marital_status,
          address: body.source.extra.residence.address,
          state: body.source.extra.residence.state,
          city: body.source.extra.residence.city,
          place: body.source.extra.birth.place,
        },
        phone: {
          mobile: body.source.extra.phone,
          verified: true,
        },
        mail: {
          email: body.source.extra.email,
          verified: true,
        },
        identification: {
          country: "Nigeria",
          methods: ["nin"],
        },
      },
    }
  );
  const data: CreatePasby = await res.data;
  return data;
};
