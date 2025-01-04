import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

// import logo
import logo from "../../images/stefanos.png"
import qr_img from "../../images/qr.png"

function QR() {
  const [qrCode, setQrCode] = useState("");

  // Your HTTPS link
  // const link = `${window.location.protocol}//${window.location.host}/menu`; // Replace with your link
  const link = "https://stefanos-opps1.vercel.app/menu"
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qr = await QRCode.toDataURL(link,{
            color: {
              light: "#000000", // Black for QR code
              dark: "#FFFFFF", // White background
            },
          });
        setQrCode(qr);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQRCode();
  }, []); // Generate QR code on component mount

  return (
    <div  className="container flex justify-center items-center">
        <div>
            <div className="flex justify-center "><img className="img-move w-52 md:w-80" alt="logo" src={logo} /></div>
            <div className="flex flex-col items-center justify-center gap-1 pt-4">
                <p>Scan the QR code below to see Menu</p>
                <p style={{direction:"rtl"}} > امسح رمز QR code أدناه لعرض القائمة </p>
            </div>
            
            
            {/* <p className="flex justify-center link"><strong>{link}</strong></p> */}
            <div className="flex justify-center mt-3 ">
              {/* {qrCode && <img  src={qrCode} alt="QR Code" className="w-60 md:w-80"  />} */}
              <img  src={qr_img} alt="QR Code" className="w-60 md:w-80"  />
            </div>
            

        </div>
    {/* <h2>Scan to Visit</h2> */}
    
    
    
  </div>
  );
}

export default QR;
