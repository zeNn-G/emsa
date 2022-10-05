export default {
  name: "stores",
  title: "Stores",
  type: "document",
  fields: [
    {
      name: "name",
      title: "İsim",
      type: "string",
    },
    {
      name: "description",
      title: "Açıklama",
      type: "string",
    },
    {
      name: "discount",
      title: "İndirim - %",
      type: "number",
    },
    {
      name: "address",
      title: "Adres Linki (Google Maps)",
      type: "string",
    },
    {
      name: "district",
      title: "Semt",
      type: "string",
    },
    {
      name: "imageurl",
      title: "Resim",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contracturl",
      title: "Sözleşme",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
