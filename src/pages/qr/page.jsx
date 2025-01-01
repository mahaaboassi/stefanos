import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { useTranslation } from "react-i18next";
// import logo
import logo from "../../images/stefanos.png"

function QR() {
  const [qrCode, setQrCode] = useState("");
  const {t} = useTranslation()
  // Your HTTPS link
  const link = window.location.host + "/menu"; // Replace with your link

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
            {/* <div className="flex flex-col items-center justify-center gap-1  pt-3">
                <h3 >Welcome</h3>
                <h3 style={{direction :"rtl"}} >أهلا بكم</h3>
            </div> */}
            <div className="flex flex-col items-center justify-center gap-1 pt-4">
                <p>Scan the QR code below to see Menu</p>
                <p style={{direction:"rtl"}} > امسح رمز QR code أدناه لعرض القائمة </p>
            </div>
            
            
            {/* <p className="flex justify-center link"><strong>{link}</strong></p> */}
            <div className="flex justify-center ">
              {qrCode && <img  src={qrCode} alt="QR Code" className="w-52 md:w-80"  />}
            </div>
            

        </div>
    {/* <h2>Scan to Visit</h2> */}
    
    
    
  </div>
  );
}

export default QR;
