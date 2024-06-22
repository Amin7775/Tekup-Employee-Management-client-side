import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ContactUsMap from "./ContactUsMap";
import ContactUsForm from "./ContactUsForm";
import { Helmet } from "react-helmet-async";

const position = [23.783726, 90.344246];

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-20 container mx-auto px-5 xl:px-1">
      <Helmet>
        <title>Tekup - Contact Us</title>
      </Helmet>
      {/* <h1 className="text-2xl font-bold mb-4">This is contact us</h1> */}
      <ContactUsForm></ContactUsForm>
      <ContactUsMap></ContactUsMap>
    </div>
  );
};

export default ContactUs;
