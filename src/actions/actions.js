import axios from "axios";

 export const postData = () => {
    axios
      .post("http://localhost:3006/api/post", {
        brandName: "Vivo",
        name: "v27 5G",
        modelNumber: "PD2269|V2231",
        price: 32999,
        color: ["Magic blue", "Nobel black"],
        ram: 8,
        storage: 128,
        rearCamera: ["50MP", "8MP", "2MP"],
        frontCamera: ["50MP"],
        processor: "Mediatek dimensity 7200 5G",
        quickCharging: "yes",
        batteryCapacity: "4500MAh",
        chargingPower: "120W",
        sim: "Dual sim",
        simType: "nano",
        displaySize: "17.22cm (6.78inch)",
        resolution: "2400*1080px",
        resolutionType: "Full HD+ AMOLED Display",
        operatingSystem: "Android 13",
        processorCore: "Octa Core",
        networkType: "5G,4G,3G,2G",
        bluetooth: "Yes",
        bluetoothVersion: "V 5.3",
        wifi: "Yes",
        sensors: "proxy",
        wifiVersion: "2.4GHz and 5.0GHz",
        warranty: "1 year brand warranty",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
 const getDataFromServer = () =>{
    axios.get("http://localhost:3006/api/getall")
    .then((response)=>{

    })
  }
