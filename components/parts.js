import { useState } from "react";

const Parts = () => {
  const [impala64, setImpala64] = useState({
    SS_Side_Molding:
      "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/b9206.html"
  });
  const [impala62, setImpala62] = useState({
    Drop_Spindles: {
      link:
        "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/bs7001.html",
      link:
        "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/153638.html"
    }
  });

  return <a href={impala64.SS_Side_Molding}>SS Side Moldings</a>;
};

export default Parts;
